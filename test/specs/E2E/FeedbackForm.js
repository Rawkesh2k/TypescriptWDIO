import { expect, browser, $ } from '@wdio/globals'


describe.skip('Feedback Form Feature',async()=>{
    it('Feedback form validations',async()=>{
        await browser.url('http://zero.webappsecurity.com/index.html')
        (await $('//strong[normalize-space()="Feedback"]')).waitForDisplayed()
        browser.waitAndClick('//strong[normalize-space()="Feedback"]')
        const name = 'Peter'
        const email = 'peter@fmail.org'
        const subject = 'Feedback form test case automation'
        const message ='Feedback Message has to be sent'
        (await $('//input[@id="name"]')).setValue(name)
        (await $('//input[@id="email"]')).setValue(email)
        (await $('//input[@id="subject"]')).setValue(subject)
        (await $('//textarea[@id="comment"]')).setValue(message)

        await browser.waitAndClick('//input[@name="submit"]')

        await expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})