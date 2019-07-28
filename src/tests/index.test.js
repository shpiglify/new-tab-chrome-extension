const { Builder, By, promise } = require('selenium-webdriver')

it('searches bing api and enters a result', searchAndEnterSuggestion)

async function searchAndEnterSuggestion() {
  jest.setTimeout(30000);
  const driver = await new Builder().forBrowser('chrome').build()

  try {
    await driver.get('http://localhost:3000')
    await driver.findElement(By.tagName('input')).sendKeys('webdriver')
    const firstUrl = await driver.getCurrentUrl()
    await promise.delayed(2000);
    await driver.findElement(By.className('suggestion')).click()
    const secondUrl = await driver.getCurrentUrl()
    if (firstUrl === secondUrl) throw new Error()
  } finally {
    await promise.delayed(3000);
    await driver.quit()
  }
}