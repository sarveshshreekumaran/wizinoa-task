const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
} = require("../controllers/userControllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot_password", forgotPassword);

module.exports = router;
