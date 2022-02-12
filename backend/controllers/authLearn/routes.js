const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const { isAuthenticated } = require("../../middlewares/authetication");
const controller = require("./controller");
const validation = require("./validation");

//isAuthenticated is used to check authenticity of user and return "user object"
router.post("/signup", validate(validation.signup, {}, {}), controller.signup);
router.post("/login", validate(validation.login, {}, {}), controller.login);

module.exports = router;
