module.exports = {
'get to dashboard page': (browser) => {
  browser
  // Load the page at the launch URL
  .url(browser.launchUrl)
  // wait for page to load
  .waitForElementVisible('.App-header', 1000)
  // click on the login link
  .click('a[href="#/about"]')
  browser.assert.urlContains('about');
},
'visit about page': (browser) => {},
'get to timeline route': (browser) => {},
'close': (browser) => {},
}