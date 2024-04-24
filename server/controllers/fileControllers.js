const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dlgdmj7dn",
  api_key: "685125148923872",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const File = require("../models/fileModel");

const uploadFile = (req, res) => {
  cloudinary.v2.uploader.upload(
    req.file.path,
    { public_id: "wizinoa" },
    async (error, result) => {
      if (error) {
        console.log(error);
        res.json({ Error: error.message });
      }
      console.log(result);
      const file = await File.create({
        name: `${result.original_filename}`,
        fileURL: `${result.secure_url}`,
      });
      res.json({ message: "File uploaded successfully", file });
    }
  );
};

module.exports = {
  uploadFile,
};
