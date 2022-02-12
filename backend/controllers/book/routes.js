// ==================== Load Starts Modules =========================================
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation')
const { isAuthenticated } = require('../../middlewares/authetication');
const schema = require('./validation');
const view = require('./view');
// ==================== Load Modules Ends =========================================

router
    .route("/")
    .post(
        validate(schema.bookValidation, {}, {}), view.addBook
    )
    .get(view.listBook)

router
    .route("/:id")
    .put(
        validate(schema.bookValidation, {}, {}), view.editBook)

    .delete(
        view.deleteBook)
    .get(
        view.getBookByID);

module.exports = router;