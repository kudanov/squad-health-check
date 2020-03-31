var mongoose = require('mongoose');

const squadAnswerSchema = new mongoose.Schema({
  areaId: String,
  good: Number,
  meh: Number,
  bad: Number,
  trend: Number,
  issues: String
}, { timestamps: true });


const SquadAnswer = mongoose.model('SquadAnswer', squadAnswerSchema);

module.exports = SquadAnswer;
