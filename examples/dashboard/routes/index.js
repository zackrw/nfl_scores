
/*
 * GET home page.
 */

var nflScores = require(__dirname + '/../../../index');

exports.index = function(req, res){
  nflScores.refresh(function(scores) {
    var games = scores.gms;
    var week = scores.w;
    res.render('index', { title: 'NFL Scores', games: games, week: week });
  });
};
