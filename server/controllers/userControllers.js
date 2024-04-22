const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: email,
      password: hashedPassword,
    });
    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.json({ Error: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ message: " User not found, please check your email" });
    }
    const decodedPassword = await bcrypt.compare(password, user.password);
    if (!decodedPassword) {
      return res.json({ message: "Wrong credentials" });
    }
    res.json({ message: "User logged in successfully", user });
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ message: " User not found, please check your email" });
    }
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const generatedOtp = await User.findOneAndUpdate(
      { email: email },
      { otp: otp },
      { new: true }
    );
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "kamille35@ethereal.email",
        pass: "8dWA4w2cr7WTCkNxRs",
      },
    });
    const sendMail = async () => {
      const info = await transporter.sendMail({
        from: '"kamille35 Foo Koch 👻" <kamille35@ethereal.email>', // sender address
        to: "example31@gmail.com", // list of receivers
        subject: "OTP for password reset", // Subject line
        text: `${otp}`, // plain text body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    };

    sendMail().catch((error) => console.log(error));

    res.json({ otp: otp, generatedOtp });
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
};
