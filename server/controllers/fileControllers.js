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
        return res.json({ Error: error.message });
      }
      // console.log(result);
      const file = await File.create({
        name: `${result.original_filename}`,
        fileURL: `${result.secure_url}`,
      });
      res.json({ message: "File uploaded successfully", file });
    }
  );
};

const getFile = async (req, res) => {
  const file = await File.find({});
  res.json(file);
};

const updateFile = async (req, res) => {
  const id = req.params.id;
  const file = await File.findOne({ _id: id });
  if (!file) {
    return res.json({ message: "File not found!" });
  }
  cloudinary.v2.uploader.upload(
    req.file.path,
    { public_id: "wizinoa" },
    async (error, result) => {
      if (error) {
        return res.json({ Error: error.message });
      }
      // console.log(result);
      const file = await File.findByIdAndUpdate(
        { _id: id },
        {
          name: `${result.original_filename}`,
          fileURL: `${result.secure_url}`,
        },
        { new: true }
      );
      res.json({ message: "File updated successfully", file });
    }
  );
};
const deleteFile = async (req, res) => {
  const id = req.params.id;
  const file = await File.findByIdAndDelete({ _id: id });
  res.json({ message: "File deleted succesfully", file });
};

module.exports = {
  uploadFile,
  getFile,
  updateFile,
  deleteFile,
};
