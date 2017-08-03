var mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  exampleOfCrappy: String,
  exampleOfAwesome: String
});


const Area = mongoose.model('Area', areaSchema);

module.exports = Area;
