const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "excel/" });
const xlsx = require("node-xlsx");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "kamille35@ethereal.email",
    pass: "8dWA4w2cr7WTCkNxRs",
  },
});

router.post("/", upload.single("excel"), (req, res) => {
  const workSheetFromFile = xlsx.parse(req.file.path);
  const emails = workSheetFromFile[0].data.reduce((acc, cur) =>
    acc.concat(cur)
  );
  const sendMail = async (email, subject, text) => {
    const info = await transporter.sendMail({
      from: '"kamille35 Foo Koch 👻" <kamille35@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: `Hi ${subject}`, // Subject line
      text: `Hello ${text}`, // plain text body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  };

  for (i = 0; i < emails.length; i++) {
    const email = emails[i];
    const subject = emails[i];
    const text = emails[i];

    sendMail(email, subject, text).catch((error) => {
      console.log(error);
    });
  }
  res.json({ message: "Emails are sended successfully" });
});

module.exports = router;
