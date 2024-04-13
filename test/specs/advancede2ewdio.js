async function loadURL() {
  await browser.url('https://the-internet.herokuapp.com/upload')
}
describe('Checking the advanced concepts of wdio', async () => {
  beforeEach(async () => {
    await loadURL()
    await browser.maximizeWindow()
  })

  // beforeEach(async()=>{
  //     await browser.url('https://the-internet.herokuapp.com/upload')
  // })
  after(async () => {
    await browser.closeWindow()
  })
  it('File Upload Test1', async () => {
    await browser.pause(5000)
    const filePath = './sampleTextSS.png'
    // const remotePath = await browser.uploadFile(filePath)
    // await $('//input[@id="file-upload"]').setValue(remotePath)
    // await $('//input[@id="file-submit"]').click()
    await browser.customFileUpload(
      filePath,
      '//input[@id="file-upload"]',
      '//input[@id="file-submit"]',
    )
    await browser.pause(3000)
    let successMsg = $('//h3[normalize-space()="File Uploaded!"]')
    expect(successMsg).toBeDisplayed('File Uploaded!')
    await browser.pause(1000)
  })

  it('File Upload Test2', async () => {
    await browser.pause(5000)
    const filePath = './sampleTextSS.png'
    // const remotePath = await browser.uploadFile(filePath)
    // await $('//input[@id="file-upload"]').setValue(remotePath)
    // await $('//input[@id="file-submit"]').click()
    await browser.customFileUpload(
      filePath,
      '//input[@id="file-upload"]',
      '//input[@id="file-submit"]',
    )
    await browser.pause(3000)
    let successMsg = $('//h3[normalize-space()="File Uploaded!"]')
    expect(successMsg).toBeDisplayed('File Uploaded!')
    await browser.pause(1000)
  })

  it('File Upload Test3', async () => {
    await browser.pause(5000)
    const filePath = './sampleTextSS.png'
    // const remotePath = await browser.uploadFile(filePath)
    // await $('//input[@id="file-upload"]').setValue(remotePath)
    // await $('//input[@id="file-submit"]').click()
    await browser.customFileUpload(
      filePath,
      '//input[@id="file-upload"]',
      '//input[@id="file-submit"]',
    )
    await browser.pause(3000)
    let successMsg = $('//h3[normalize-space()="File Uploaded!"]')
    expect(successMsg).toBeDisplayed('File Uploaded!')
    await browser.pause(1000)
  })

  it('Display Title and URL', async () => {
    const title = await browser.getTitleAndURL()
    console.log(title)

    await browser.waitAndClick('#file-submit')
    await browser.pause(2000)
  })

  it('Create and Switch Window', async()=>{
    await browser.pause(2000)
    await browser.url('https://google.com')
    await browser.newWindow('https://webdriver.io')
    await browser.pause(2000)
    await browser.switchWindow('google.com')
    await browser.pause(2000)
  })
})
