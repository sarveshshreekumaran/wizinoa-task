require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  uploadFile,
  getFile,
  updateFile,
  deleteFile,
} = require("../controllers/fileControllers");
router.route("/").get(getFile).post(upload.single("file"), uploadFile);
router.route("/:id").put(upload.single("file"), updateFile).delete(deleteFile);

module.exports = router;
