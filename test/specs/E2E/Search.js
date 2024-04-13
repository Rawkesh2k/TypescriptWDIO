import { expect, browser, $ } from '@wdio/globals'


describe.skip('Search Feature', () => {
  it('Should Search for values using keyboard press', async () => {
await browser.url('http://zero.webappsecurity.com/index.html')
browser.maximizeWindow()
browser.pause(2000)
await $('//input[@id="searchTerm"]').waitForDisplayed()
await $('//input[@id="searchTerm"]').setValue('bank')
await browser.keys('Enter')
const result = await $('h2')
await expect(result).toBeExisting()
await expect(result).toHaveText('Search Results:')
  })
})
