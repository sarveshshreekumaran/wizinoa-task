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
    headers: req.headers,
    ip: req.ip,
  };
  console.log();
  res.json({ userdetails });
});

module.exports = router;
