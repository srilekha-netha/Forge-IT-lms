const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');

router.get('/my-courses', auth, allowRoles('student'), (req, res) => {
  res.json({ message: `Welcome Student ${req.user.email}` });
});

module.exports = router;
