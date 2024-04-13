import { expect, browser, $ } from '@wdio/globals'

describe.skip('My First Testsuite', () => {
  let smallPause = '2000'

  it.only('Screenshots',async()=>{
    await browser.url('https://devexpress.github.io/testcafe/example/')
    await browser.maximizeWindow()
    let sampleText = $('//p[contains(text(),"This webpage is used as a sample in TestCafe tutor")]')
    await browser.saveScreenshot("screenshot1.png")
    sampleText.saveScreenshot("sampleTextSS.png")
    await browser.pause(2000)
  })

  it('Device Emulation', async () => {
    let mobile = [375,812]
    let tablet = [1024,768]
    let desktop = [1650,1050]

    //Mobile
    await browser.setWindowSize(mobile[0],mobile[1])
    await browser.url('https://devexpress.github.io/testcafe/example/')
    await browser.pause(2000)

    //Tablet
    await browser.setWindowSize(tablet[0],tablet[1])
    await browser.url('https://devexpress.github.io/testcafe/example/')
    await browser.pause(2000)

    //Desktop
    await browser.setWindowSize(desktop[0],desktop[1])
    await browser.url('https://devexpress.github.io/testcafe/example/')
    await browser.pause(2000)
  })
  it('Dynamic wait test case', async () => {
    await browser.url('https://devexpress.github.io/testcafe/example/')
    await browser.maximizeWindow()
    let elementExist = $('h1')
    await elementExist.waitForExist()

    await browser.pause(2000)
  })

  it('Select and Check Boxes Test', async () => {
    await browser.url('https://devexpress.github.io/testcafe/example/')
    browser.maximizeWindow()
    let selDropdown = await $("//select[@id='preferred-interface']")
    await browser.pause(smallPause)
    selDropdown.selectByVisibleText('Both')
    let option = await $('option=Both')
    await browser.pause(smallPause)
    expect(option).toBeSelected()
  })
  it('Forms and Inputs', async () => {
    await browser.url('https://saucedemo.com')
    let username = await $('//input[@id="user-name"]')
    let password = await $('//input[@id="password"]')
    let loginBtn = await $('//input[@id="login-button"]')

    //Add value
    //Set value
    await username.setValue('standard_user')
    await password.setValue('secret_sauce')
    loginBtn.click()
    await browser.pause(5000)
    let inventoryContainer = await $('#inventory_container')
    await expect(inventoryContainer).toBeDisplayed()

    //Clear value
  })
  it('my first wdio test', async () => {
    let myUrl = 'https://example.com/'
    // let smallPause = '2000'
    await browser.url(myUrl)
    await browser.pause(smallPause)

    //old way assertions

    // let pageTitle = await browser.getTitle();
    // let pageUrl = await browser.getUrl();
    // expect(pageTitle).toContain('Android Authority')
    // expect(pageUrl).toContain('www.androidauthority.com')
    // await browser.pause(smallPause)

    //Modern way assertions

    //await expect(browser).toHaveTitleContaining('Android Authority')
    // await expect(browser).toHaveUrlContaining('androidauthority.com')

    let pageElement = await $('h1')
    await expect(pageElement).toExist()
    await expect(pageElement).toBeDisplayed()
    await expect(pageElement).toHaveTextContaining('Example')
  })
})
