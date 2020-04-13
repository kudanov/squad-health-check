const Constants = require("../src/constans");
const Area = require("../models/Area");
const validator = require('validator');

function renderPage(res, areas) {
  res.render('new-squad-answer', {
    pageData: {
      title: 'Add answer',
      trendValues: Constants.TREND_VALUES,
      areaDescription: areas
    }
  });
}

/**
 * GET /new-squad-answer
 * Page for adding new squad answer.
 */
exports.getNewSquadAnswer = (req, res) => {
  //TODO: only for this user
  Area.find()
    .exec()
    .then(dbAreas => {
      if (dbAreas.length) {
        renderPage(res, dbAreas);
      } else {
        Area.collection.insertMany(Constants.KNIBERG_AREA)
          .then(createdAreas => renderPage(res, createdAreas.ops))
          .catch(err => req.flash('errors', err));
      }
    })
    .catch(err => req.flash('errors', err));
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
}
