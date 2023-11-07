const { I } = inject();

module.exports = {
  goto() {
    I.amOnPage('http://zero.webappsecurity.com/login.html');
  },

  fillForm() {
    // Fill in the form with data
    I.waitForElement('#login_form');
    I.fillField('#user_login', 'invalid-username');
    I.fillField('#user_password', 'invalid-password');
    I.click('input[type="submit"]');
  },
  // insert your locators and methods here
};
