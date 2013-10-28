
var request = require('request');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname + '/../config.json'));

var NflScores = function() {
  this.config = config;
  this.scores = {};
}

NflScores.prototype.refresh = function(cb) {
  var that = this;
  request(that.config.scores_url, function(error, response, data) {
    that.scores = data;
    cb(that.scores);
  });
}

module.exports = new NflScores;
