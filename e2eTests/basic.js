module.exports = {
'get to dashboard page': (browser) => {
  browser
  .url(browser.launchUrl)
  .waitForElementVisible('.App-header', 1000)
  .getText('.content', function(comp) {
    this.assert.equal(comp.value, 'This is how our Dashboard page looks like !')
  });
},
'visit about page': (browser) => {
  browser
  .click('a[href="/about"]')
  .waitForElementVisible('.App-header', 1000)
  .getText('.content', function(comp) {
    this.assert.equal(comp.value, 'This is what about us page looks like !')
  });
},
'get to timeline route': (browser) => {
  browser
  .url('http://localhost:3000/timline')
  .assert.elementPresent('.Timeline')
  .click(".Timeline span")
  .pause(100)
  .assert.cssClassPresent(".Timeline ul", "active");

},
'close': (browser) => {
  browser.end();
},
}