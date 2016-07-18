const webpackConfig = require('./webpack.config')({ dev: true });
process.env.BABEL_ENV = 'test';
require('babel-register');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [ './app/tests.js' ],
    exclude: [],
    preprocessors: {
      './app/tests.js': ['webpack'],
    },
    reporters: ['progress', 'coverage',],
    junitReporter: {
      outputFile: 'test-results.xml'
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: true
  });
};
