const Constants = require("../src/constans");

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
  
exports.postNewSquadAnswer = (req, res) => {
  req.assert('area', 'Area cannot be empty').notEmpty();
  req.assert('name', 'Name cannot be empty').notEmpty();

  var errors = req.getValidationResult();

  if (!errors.isEmpty()) {
    req.flash('errors', errors.toString());
    return res.redirect('/new-squad-answer');
  }

  res.redirect('/');
};
