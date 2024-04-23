const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/userControllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot_password", forgotPassword);
router.post("/reset_password", resetPassword);

module.exports = router;
