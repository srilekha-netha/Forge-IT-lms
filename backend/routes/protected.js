const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, (req, res) => {
  res.json({ msg: `Welcome, user with ID: ${req.user}` });
});

module.exports = router;
