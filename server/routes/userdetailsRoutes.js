const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const userdetails = req.useragent;
  res.json(userdetails);
});

module.exports = router;
