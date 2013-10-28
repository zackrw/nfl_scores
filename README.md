## NFL Scores
NFL Scores exposes a clean API for getting live data about the day's nfl scores. It queries nfl.com xml endpoints and relies on the xml2js library to convert that to a JS object.

#### Installation

    npm install nfl_scores

#### Getting started

###### 1. require it

    var nflScores = requre("nfl_scores");

###### 2. use it

    // Acquire the most up to date scores, and inspect them.
    nflScores.refresh(function(scores) {
      console.log(scores);
    });

    // Inspect the last set of refreshed scores
    // without sending any network traffic.
    console.log(nflScores.scores);

#### Example dashboard
To view the live scores in an example app, go to the examples/dashboard directory, and run `node server.js`. Point your browser to localhost:3000, and you should see something like this:

![Example Dashboard](https://raw.github.com/zackrw/nfl_scores/master/examples/dashboard/public/images/dashboard_example.png)

#### Tests
NFL Scores uses the mocha framework for unit tests.

In the root dir, run `npm test` or `make test` to run all tests.
Run `make coverage` to run the coverage tests. or just open coverage.html from the git repo in your browser to see the results of the latest coverage test.

NFL Scores is written by [Zack Reneau-Wedeen](http://zackrw.com)
