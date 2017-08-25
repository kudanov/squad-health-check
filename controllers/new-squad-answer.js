/**
 * GET /new-squad-answer
 * Page for adding new squad answer.
 */
exports.getNewSquadAnswer = (req, res) => {
    res.render('new-squad-answer', {
      title: 'Add answer'
    });
  };
  
  exports.postNewSquadAnswer = (req, res) => {
    res.redirect('/');
  };
  