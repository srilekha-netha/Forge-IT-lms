const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: String,
  content: String,
  quiz: [
    {
      question: String,
      options: [String],
      correctAnswer: String
    }
  ]
});

module.exports = mongoose.model('Chapter', chapterSchema);
