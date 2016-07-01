var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in PhantomJS
    singleRun: true, //just run once by default
    files: [
      'src/test/e2e/index.js' //just load this file
    ],
    plugins: [ 'karma-phantomjs-launcher',/* 'karma-chai', 'karma-mocha',
      /!*'karma-sourcemap-loader',*!/ 'karma-webpack', 'karma-coverage',
      'karma-mocha-reporter'*/
    ],
    reporters: [ /*'mocha', 'coverage'*/ ], //report results in this format
  });
};
