
/**
 * page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get pickOptions () {
        return $('//a[normalize-space()="Pick your options"]');
    }

    get proceedBtn () {
        return $('//button[@name="sku-selector-next-step-button"]');
    }

    get deviceOptionsCheckBox () {
        return $('//span[@class="Checkbox__FakeCheckbox-jt362p-0 cHdFMC"]');
    }

    get continuePlanbtn () {
        return $('//button[@name="offer-selector-next-step-button"]');
    }

    get btncontinueWarranty () {
        return $('//span[normalize-space()="Continue to warranty"]'); 
    }

    get withoutWarrantybtn () {
        return $('//button[@data-id="no-warranty-button"]');
    }

    get withoutTradeInbtn () {
        return $('//a[contains(text(), "Proceed without Trade-In")]');
    }

    get telusOnlineSecBtn () {
        return $('//label[normalize-space()="TELUS Online Security"]');
    }


    /**
     * specifies the url of the browser
     */
    openBrowser () {
        return browser.url('https://www.telus.com/mobility/configure?product=iphone-13&sku=NLAIP13128PK')
    }
}

module.exports = new LoginPage();
