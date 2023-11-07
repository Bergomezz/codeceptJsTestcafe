const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'chrome',
      show: false,
    },
    CustomCommands: {
      require: './customcommands_helper.js',
    },
  },
  include: {
    I: './steps_file.js',

    loginPagePage: './pages/LoginPage.js',
  },
  name: 'codeceptJsTestcafe',
};
