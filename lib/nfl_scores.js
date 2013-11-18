
var request = require('request');
var xml2js = require('xml2js');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname + '/../config.json'));

var NflScores = function() {
  this.config = config;
  this.scores = {};
}

NflScores.prototype.refresh = function(cb) {
  var that = this;
  request(that.config.scores_url, function(err, response, body) {
    if (err) {
      cb(err);
    }
    else {
      xml2js.parseString(body, function(err, scores) {
        if (err) {
          cb(err);
        }
        else {
          that.scores = formatScores(scores);
          cb(null, that.scores);
        }
      });
    }
  });
}

function formatScores(uglyScores) {
  var meta = uglyScores.ss.gms[0].$;
  var gms = uglyScores.ss.gms[0].g;
  var scores = {};
  scores.week = str2Num(meta.w);
  scores.games = [];
  var i;
  for (i = 0; i < gms.length; i++) {
    scores.games.push(gms[i].$);
  }

  return scores;
}

function str2Num(str) {
  return Number(str.trim());
}


module.exports = new NflScores;
