Feature('example');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://example.com');
  I.waitForElement('h1');
  I.see('Example');
  I.dontSeeElement('.login-form');
  I.seeInCurrentUrl('example.com');
});
