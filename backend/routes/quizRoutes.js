const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { submitQuiz } = require('../controllers/quizController');

router.post('/quiz-result', authMiddleware, submitQuiz);

module.exports = router;
