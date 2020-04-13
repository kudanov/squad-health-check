var mongoose = require('mongoose');

const squadAnswerSchema = new mongoose.Schema({
  squad: String,
  date: {type: Date, default: Date.now},
  areaId: String,
  good: Number,
  meh: Number,
  bad: Number,
  trend: Number,
  issues: String
});


const SquadAnswer = mongoose.model('SquadAnswer', squadAnswerSchema);

module.exports = SquadAnswer;
