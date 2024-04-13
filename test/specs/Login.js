import { expect, browser, $ } from '@wdio/globals'

describe.skip('Login Flow', () => {
  before(async () => {
    //Load Homepage
    await browser.url('http://zero.webappsecurity.com')
    await browser.maximizeWindow()
    await browser.pause(3000)
  })
  it('Should not login with invalid username and password', async () => {
    //Click on sign in btn
    await browser.waitAndClick('//button[@id="signin_button"]')

    //Fill the form
    await browser.pause(1000)
    await (await $('#login_form')).waitForDisplayed();

    await browser.pause(1000)
    (await $('//input[@id="user_login"]')).setValue('test')
    await browser.pause(1000)
    (await $('//input[@id="user_password"]')).setValue('test')
    await browser.pause(1000)
    //Submit the form
    await(await $('//input[@value="Sign in"]')).click()
    
    //await browser.pause(1000)
    //Verify Assert msg
    let errorMsg = '//*[contains(text(),"Login and/or password are wrong.")]'
    await expect(errorMsg).toBeDisplayed('Login and/or password are wrong.')
  })

  it.skip('Reset Account Password', async()=>{
    //click on reset button
    await (await $('//a[normalize-space()="Forgot your password ?"]')).click();

    (await $('//input[@id="user_email"]')).setValue('test@til.org')
    (await $('//input[@name="submit"]')).click()
    let validationMsg = $('//div[@*="offset3 span6"]')
    expect(validationMsg).toContain('Your password will be sent to the following email:')
    //fill form
    //submit form
    //verify the message
  })

})
