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
  res.redirect('/');
};
