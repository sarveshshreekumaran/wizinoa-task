const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Require an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Require password"],
    },
    otp: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
