const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    name: String,
    fileURL: { type: String, required: [true, "File URL required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
