exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'site-test.js',
    'footer-test.js'
  ],
  capabilities: {
    'browserName': 'firefox'
  }
};