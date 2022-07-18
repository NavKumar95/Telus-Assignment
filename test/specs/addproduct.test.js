const LoginPage = require('../pageobjects/login.page');

describe('Automating the purchase of a device', () => {
    it('should open the telus website and customize Iphone 13 using "Pick your options"', async () => {
        await LoginPage.openBrowser();
        browser.maximizeWindow();

        await browser.pause(5000);
        await LoginPage.pickOptions.click();

        await browser.pause(2000);
        await $('//label[@for="storage-selector_256"]').click();
        await expect($('//h2[contains(text(), "iPhone 13")]')).toHaveText('iPhone 13');

        await LoginPage.proceedBtn.click();
        await browser.pause(2000);
    });
    it('complete customization and continue without warranty after verifying the error', async () => {
        await $('//button[@data-id="offer-selector-24-0-button"]').click();
        await LoginPage.deviceOptionsCheckBox.click();
        await LoginPage.continuePlanbtn.click();

        await LoginPage.btncontinueWarranty.click();

        const textError = await $('//span[contains(text(),"You must select a plan before proceeding")]');
        await expect(textError).toHaveTextContaining('You must select a plan');
        await $('(//button[@type="button"])[13]').click();
        await LoginPage.btncontinueWarranty.click();
        await browser.pause(1000);

        await LoginPage.withoutWarrantybtn.click();
        await browser.pause(2000);
        await $('//button[@name="warranty-selector-next-step-button"]').click();
    });
    it('continue to Summary and Finally Add device to the cart', async () => {
        await LoginPage.withoutTradeInbtn.click();
        await browser.pause(2000);

        await LoginPage.telusOnlineSecBtn.click();
        await browser.pause(2000);

        await $('(//span[contains(text(),"Add")])[1]').click();
        await $('//button[@name="addon-selector-next-step-button"]').click();
        await browser.pause(3000);

        const addCartText = await $('//a[normalize-space()="Add to cart"]');
        await expect(addCartText).toHaveText('Add to cart');
        await browser.pause(5000);
        await $('//a[normalize-space()="Add to cart"]').click();
        await browser.pause(5000); 

        const addedItem = await $('//h4[normalize-space()="Apple iPhone 13"]');
        await expect(addedItem).toHaveText('Apple iPhone 13');
    });

});


