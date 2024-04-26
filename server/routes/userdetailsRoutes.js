const express = require("express");
const router = express.Router();
const os = require("os");

router.get("/", (req, res) => {
  const userdetails = {
    version: os.version(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname(),
    cpus: os.cpus()[0].model,
    totalmem: os.totalmem(),
    userInfo: os.userInfo(),
    browser: req.headers["sec-ch-ua"]?.split(",")[2],
    ip: req.ip,
  };
  res.json(userdetails);
});

module.exports = router;
