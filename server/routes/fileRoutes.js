require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dlgdmj7dn",
  api_key: "685125148923872",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/", upload.single("file"), (req, res) => {
  cloudinary.v2.uploader.upload(
    req.file.path,
    { public_id: "wizinoa" },
    (error, result) => {
      if (error) {
        console.log(error);
        res.json({ Error: error.message });
      }
      console.log(result);
      res.json({ message: "File uploaded successfully" });
    }
  );
});

module.exports = router;
