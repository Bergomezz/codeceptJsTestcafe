Feature('example');

Scenario('Test 1', ({ I }) => {
  I.amOnPage('http://example.com');
  I.waitForElement('h1');
  I.see('Example');
});

Scenario('Test 2', ({ I }) => {
  I.amOnPage('http://example.com');
  I.dontSeeElement('.login-form');
  I.seeInCurrentUrl('example.com');
});

Scenario('Test 3', ({ I }) => {
  I.amOnPage('http://example.com');
  I.waitForElement('h1');
  I.see('Example');
  I.dontSeeElement('.login-form');
  I.seeInCurrentUrl('example.com');
});
