
var nflScores = require(__dirname + '/index.js');
nflScores.refresh(function(scores) {
  console.log(scores);
});
