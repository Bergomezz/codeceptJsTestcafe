Feature('example');

// Scenario('Login Test', ({ I }) => {
//   I.amOnPage('http://zero.webappsecurity.com/login.html');
//   I.waitForElement('#login_form');
//   I.fillField('#user_login', 'invalid-username');
//   I.fillField('#user_password', 'invalid-password');
//   I.click('input[type="submit"]');
//   I.waitForText('Login and/or password are wrong');
// });

Scenario('Extract Text', async ({ I }) => {
  I.slowTest(0.2);
  I.amOnPage('http://example.com');
  I.refreshPage();
  let text = await I.grabTextFrom('h1');
  console.log(`Text: ${text}`); // prints "Example Domain"
  let value = await I.grabValueFrom('h1');
  console.log(`Value: ${value}`); // prints "Example Domain"
});

Scenario('Page Object', ({ I, loginPagePage }) => {
  loginPagePage.goto();
  loginPagePage.fillForm();
  I.waitForText('Login and/or password are wrong');
});
