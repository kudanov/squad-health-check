var mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  title: String,
  exampleOfAwesome: String,
  exampleOfCrappy: String
  
});


const Area = mongoose.model('Area', areaSchema);

module.exports = Area;
