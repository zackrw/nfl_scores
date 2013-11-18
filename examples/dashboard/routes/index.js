
/*
 * GET home page.
 */

var nflScores = require(__dirname + '/../../../index');

exports.index = function(req, res){
  nflScores.refresh(function(err, scores) {
    var games = scores.games;
    var week = scores.week;
    res.render('index', { title: 'NFL Scores', games: games, week: week });
  });
};

exports.json = function(req, res) {
  nflScores.refresh(function(err, scores) {
    res.send(scores);
  });
};
