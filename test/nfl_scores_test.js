var libpath = process.env['NS_COV'] ? '../lib-cov' : '../lib';

var nflScores = require(libpath + '/nfl_scores');

var globalScores;

describe('NFL Scores', function() {

  describe('#refresh', function() {
    before(function(done) {
      nflScores.refresh(function(scores) {
        globalScores = scores;
        done();
      });
    });

    it('should return a scores object', function() {
      (typeof globalScores).should.equal('object');
    });

    it('should set the scores value to an object', function() {
      (typeof nflScores.scores).should.equal('object');
    });

    it('should set the scores property equal to value returned', function() {
      globalScores.should.equal(nflScores.scores);
    });

    it('should set gms object on the scores', function() {
      (typeof nflScores.scores.gms).should.equal('object');
    });

    it('should set w number on the scores', function() {
      (typeof nflScores.scores.w).should.equal('number');
    });

  });

});
