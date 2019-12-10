const Constants = require("../src/constans");
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
  // const errors = [];

  // if (validator.isEmpty(req.body.name)) errors.push({ msg: 'Please enter the name of a squad' });
  // if (validator.isEmpty(req.body.area)) errors.push({ msg: 'Please enter the name of the area' });

  // if (errors.length) {
  //   req.flash('errors', errors);
  //   return res.redirect('/new-squad-answer');
  // }

  //res.redirect('/');
  console.log(req.body);
  res.json(req.body);
};
