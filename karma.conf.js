var webpack = require("webpack");
var webpackConfig=require('./webpack/webpack.test');
module.exports = function(config) {
  config.set({

    files: [
      // all files ending in "test"
      'test/test.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['jasmine','es6-shim'],
    plugins: [
      require("karma-es6-shim"),
      require("karma-htmlfile-reporter"),
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-coverage"),
      require("karma-firefox-launcher"),
      require("karma-spec-reporter")
    ],

    reporters: ['spec', 'coverage','html'],
    preprocessors: {
        'test/test.js': ['webpack','coverage']
    },
    coverageReporter: {

      dir: 'build/coverage/',
      reporters: [
          { type: 'html' },
          { type: 'text' },
          { type: 'text-summary' }
      ]
    },
    htmlReporter: {
      outputFile: 'tests/units.html',
            
      // Optional 
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    webpack:webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    browsers: ['Firefox']
  });
};   