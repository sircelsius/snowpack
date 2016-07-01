exports.config = {
  // running Selenium server
  host: '0.0.0.0',
  port: 4444,
  path: '/wd/hub',

  specs: [
    './src/test/e2e/index.js'
  ],
  capabilities: [{
    browserName: 'chrome'
  }],

  before: function() {
    require('babel-register')({

    });
  },


  baseUrl: 'http://localhost:8080',
  framework: 'mocha',
  reporter: 'spec',
  logLevel: 'debug',
  screenshotPath: 'shots',
}
