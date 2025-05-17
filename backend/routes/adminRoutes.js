const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');

// Example protected admin route
router.get('/dashboard', auth, allowRoles('admin'), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.email}` });
});

module.exports = router;
