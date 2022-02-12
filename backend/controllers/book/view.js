//========================== Load Modules Start ====================================
const { Book } = require("../../models");
const httpStatus = require("http-status");
const { pick } = require("lodash");

const MESSAGE = require("../../config/message");
const validUrl = require('valid-url');
//========================== Load Modules End ==============================================


/**
 * Query for Book
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const listBook = async (req, res) => {
    const filter = pick(req.query, ["title"]);
    const options = pick(req.query, [
        "search",
        "sort",
        "orderBy",
        "limit",
        "offset",
        "page"
    ]);
    if (options.search) {
        options.search = {
            $or: [
                { name: { $regex: options.search, $options: "i" } },
                { alpha_two_code: { $regex: options.search, $options: "i" } },
                { sku: { $regex: options.search, $options: "i" } },
                { shortDescription: { $regex: options.search, $options: "i" } },
                { longDescription: { $regex: options.search, $options: "i" } },
                { supplierRef: { $regex: options.search, $options: "i" } }
            ],
        };
    }
    const data = await Book.paginate(filter, options);
    return res.status(httpStatus.OK).send({ ...data });
};

const addBook = async (req, res) => {
    const data = req.body;

    if (validUrl.isUri(data.link)) {
        await Book.findOne({ title: data.title })
            .then(async (existName) => {
                if (!existName) {
                    const book = await Book.create(data);
                    return res.json({
                        code: 200,
                        status: true,
                        message: MESSAGE.createSuccess,
                        data: book
                    })
                } else {
                    return res.json({
                        code: 404,
                        status: false,
                        message: MESSAGE.nameExists,
                        data: {}
                    })
                }
            })
            .catch((error) => {
                return res.json({
                    code: 404,
                    status: false,
                    data: {}
                })
            });
        // console.log('Valid URL');
    } else {
        return res.json({
            code: 200,
            status: true,
            message: MESSAGE.uslIsNotValid,
            data: {}
        })
        // console.log('Not a URI');
    }
}


/**
 * Update Book by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Book>}
 */
const editBook = async (req, res) => {
    let query = {
        _id: req.params.id
    };
    let data = req.body;
    let uniqueQuery = { title: data.title }

    return await Book.findOne(uniqueQuery).then(async (data) => {
        /* if book found by existing name this if condition will execute */
        if (data && data != null) {
            return await Book.findOne(query).then(async (result) => {
                if (result && result != null) {
                    let details = req.body;
                    if (data.title == result.title) {
                        return await Book
                            .findByIdAndUpdate(query, { $set: details })
                            .then(async (result) => {
                                if (result) {
                                    return res.json({
                                        code: 200,
                                        status: true,
                                        message: MESSAGE.editSuccess,
                                        data: result
                                    })
                                }
                            }).catch((error) => {
                                return error;
                            });

                    } else {
                        return res.json({
                            code: 404,
                            status: false,
                            message: MESSAGE.nameExists,
                            data: {}
                        })
                    }
                } else {
                    return res.json({
                        code: 403,
                        status: false,
                        message: MESSAGE.invalidID,
                        data: {}
                    })
                }
            }).catch((error) => {
                return error;
            })

        } else {
            /* if university found not found y exixting name the else condition will execute */
            return await University.findById(query).then(async (result) => {
                if (result && result != null) {
                    let details = req.body;
                    return await Book
                        .findOneAndUpdate(query, { $set: details })
                        .then(async (result) => {
                            if (result) {
                                res.json({
                                    code: 200,
                                    status: true,
                                    message: MESSAGE.editSuccess,
                                    data: result
                                })
                            }
                        }).catch((error) => {
                            return error;
                        });
                } else {
                    return res.json({
                        code: 403,
                        status: false,
                        message: MESSAGE.invalidID,
                        data: {}
                    })
                }
            }).catch((error) => {
                return res.json({
                    code: 403,
                    status: false,
                    message: error.message,
                    data: {}
                })
            });
        }
    }).catch((error) => {
        return error;
    });
};



/**
* Get Book by id
* @param {ObjectId} id
* @param {boolean} allFields - true|false true then return default schema
* @returns {Promise<Book>}
*/
const getBookByID = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Book.findById(id);
        if (!data) {
            return res
                .status(httpStatus.BAD_REQUEST)
                .send({ message: MESSAGE.invalidID });
        }
        return res.status(httpStatus.OK).send({ data });
    } catch (error) {
        return res.json({
            code: 404,
            status: false,
            message: MESSAGE.invalidID,
            data: {}
        })
    }
};


/**
 * Delete Book by id
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        book = await Book.findByIdAndRemove(id);
        if (!book) {
            return res.json({
                code: 404,
                status: false,
                message: MESSAGE.invalidID,
                data: {}
            })
        }
        return res.json({
            code: 200,
            status: true,
            message: MESSAGE.deleteSuccess,
            data: {}
        })
    } catch {
        return res.json({
            code: 404,
            status: false,
            message: MESSAGE.invalidID,
            data: {}
        })
    }
};

module.exports = {
    listBook,
    addBook,
    editBook,
    getBookByID,
    deleteBook
};