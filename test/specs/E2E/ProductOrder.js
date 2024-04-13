describe.skip('Sauce Demo - Product Order', () => {
  before(async () => {
    //Login
    await browser.url('https://www.saucedemo.com/')
    await browser.maximizeWindow()
    await browser.sauceLogin()
  })
  after(async () => {
    //Logout
    browser.sauceLogout()
  })
  it('Should complete product oreder',async()=>{
    (await $('.inventory_container')).waitForDisplayed()
    //Put products into shopping cart
    await $('//div[contains(text(),"Sauce Labs Backpack")]/../../../div//button').click()
    await $('//div[contains(text(),"Sauce Labs Fleece Jacket")]/../../../div//button').click()
    (await $('//a[@class="shopping_cart_link"]')).click()
    //Assert shopping cart
    let cartPageValidation = $('//span[@class="title"]')
    await expect(cartPageValidation).toContainEqual('Your Cart')
    (await $('//button[@id="checkout"]')).click()
    let checkoutPageValidation = $('//span[@class="title"]')
    await expect(checkoutPageValidation).toContainEqual('Checkout: Your Information')
    //Fill the customer info

    //Username
    await $('#first-name').waitForDisplayed();
    await $('#first-name').setValue('test1');
    //Password
    await $('#last-name').waitForDisplayed();
    await $('#last-name').setValue('test2');
    //Zipcode
    await $('#postal-code').waitForDisplayed();
    await $('#postal-code').setValue('45220');
    
    //Assert the final order
    let cartOverview = $('//span[@class="title"]')
    await expect(cartOverview).toContainEqual('Checkout: Overview')
    await $('//button[@id="finish"]').click()
    let confirmationMsg = $('//*[@id="checkout_complete_container"]/h2')
    expect(confirmationMsg).toContainEqual('Thank you for your order!')
  })
})
