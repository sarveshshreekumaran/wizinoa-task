require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile } = require("../controllers/fileControllers");
router.post("/", upload.single("file"), uploadFile);

module.exports = router;
