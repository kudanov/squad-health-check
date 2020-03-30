const Constants = require("../src/constans");
const AreaModel = require("../models/Area.js");
const validator = require('validator');

/**
 * GET /new-squad-answer
 * Page for adding new squad answer.
 */
exports.getNewSquadAnswer = (req, res) => {
  //TODO: get data from DB
  var areas = [{id:1, description:"Area1"}, 
    {id:2, description:"Area2"},
    {id:3, description:"Area3"}, 
    {id:4, description:"Area4"}];


  const default_area = "Area1";
  var area = new AreaModel({
    title: default_area, 
    exampleOfCrappy: "crappy1", 
    exampleOfAwesome: "exampleOfAwesome1"});
  
  var query = AreaModel.find({title: default_area});
  query.exec(function(err, result){
    if(!err) {
      if (!result){
        area.save()
          .then(doc => {console.log(doc)})
          .catch(err => {console.error(err)});
      } else {
        console.log(result);
      }
    } else {
      console.error(err);
    }
  });

  res.render('new-squad-answer', {
    pageData: {
      title: 'Add answer', 
      trendValues:Constants.TREND_VALUES,
      areaDescription:areas
    }
  });
};
  
/**
 * POST /new-squad-answer
 */
exports.postNewSquadAnswer = (req, res, next) => {
  console.log(req.body);
  const errors = [];

  if (!req.body.name) errors.push({ msg: 'Please enter the name of a squad' });
  if (!req.body.area) errors.push({ msg: 'Please enter the name of the area' });

  if (errors.length) {
    req.flash('errors', errors);
    return res.redirect('/new-squad-answer');
  }

  res.redirect('/');
};
