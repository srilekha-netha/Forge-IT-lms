const Chapter = require('../models/Chapter');
const User = require('../models/User');

exports.submitQuiz = async (req, res) => {
  const { chapterId, answers } = req.body;

  try {
    const chapter = await Chapter.findById(chapterId);
    if (!chapter) return res.status(404).json({ error: 'Chapter not found' });

    const totalQuestions = chapter.quiz.length;
    let correctCount = 0;

    chapter.quiz.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) correctCount++;
    });

    const score = (correctCount / totalQuestions) * 100;

    // Unlock next chapter if score >= 70%
    if (score >= 70) {
      const nextChapter = await Chapter.findOne({ _id: { $gt: chapterId } }).sort({ _id: 1 });
      if (nextChapter && !req.user.unlockedChapters.includes(nextChapter._id)) {
        req.user.unlockedChapters.push(nextChapter._id);
        await req.user.save();
      }
    }

    res.json({ score, message: score >= 70 ? 'Passed! Next chapter unlocked' : 'Failed. Try again.' });

  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
