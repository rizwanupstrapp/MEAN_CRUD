const { Joi } = require("express-validation");

module.exports = {
    bookValidation: {
        body: Joi.object({
            author: Joi.string().required(),
            country: Joi.string().required(),
            language: Joi.string().required(),
            link: Joi.string().required(),
            pages: Joi.number().required(),
            title: Joi.string().required(),
            year: Joi.number().required()
        }),
    }
};