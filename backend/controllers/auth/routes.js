// ==================== Load Starts Modules =========================================
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation')
const { isAuthenticated } = require('../../middlewares/authetication');
const auth = require('./view');
const schema = require('./validation');
// ==================== Load Modules Ends =========================================


router.post('/signup', validate(schema.signup, {}, {}), auth.signup);
router.post('/login', validate(schema.login, {}, {}), auth.login);
router.post('/logout',  auth.logout);

module.exports = router;
