
// ========================   ==================
const express = require("express");
const router = express.Router();
const {
    isAuthenticated,
    isAdmin
} = require("../middlewares/authetication");

// ========================   ==================


const authRoutes = require("../controllers/auth/routes");
router.use("/auth", authRoutes);

const bookRoutes = require("../controllers/book/routes");
router.use("/book", isAdmin(), bookRoutes);

// const authRoutes = require("../controllers/authLearn/routes");
// router.use("/auth", authRoutes);


router.use(function (req, res) {
    res.status(404).json({
        code: 404,
        status: false,
        message: 'API route not found',
        data: {}
    })
});
module.exports = router;
