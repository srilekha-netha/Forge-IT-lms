const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');

router.get('/courses', auth, allowRoles('teacher'), (req, res) => {
  res.json({ message: `Welcome Teacher ${req.user.email}` });
});

module.exports = router;
