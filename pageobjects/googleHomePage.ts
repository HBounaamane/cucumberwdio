import Page from "./basePage";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchField () {
        return $('input[class="gLFyf gsfi"]');
    }

    public get searchButton () {
        return $('input[class="gNO89b"]');
    }

    public get cookiesModal(){
        return $('#CXQnmb');
    }
    public get acceptCookiesButton(){
        return $('#L2AGLb');
    }
    public get googleIcon(){
        return $('div[class="k1zIA rSk4se"]');
    }

    public async acceptGoogleCookies(){
        try{
            const isCookiesModalDisplayed = await this.cookiesModal.waitForDisplayed({timeout:4000});
            if(isCookiesModalDisplayed){
                const acceptCookies = await this.acceptCookiesButton
                await acceptCookies.waitForClickable({timeout:1500});
                await acceptCookies.click();
            }
        }catch (e){

        }

    }

    public async waitForGoogleSearchPageToBeReady(){
        const googleIconHomePage = await this.googleIcon;
        await googleIconHomePage.waitForDisplayed({timeout:5000,timeoutMsg:'google home page is not ready'});
    }

    public async googleSearch (keyword: string, clear:boolean=false) {

        const googleSearchField = await this.searchField;
        await googleSearchField.waitForDisplayed({ timeout:3000,timeoutMsg:'Google search field is not displayed'});
        if(clear){
            await googleSearchField.clearValue();
        }
        await googleSearchField.setValue(keyword);

        const submitSearch = await this.searchButton;
        try{
            await submitSearch.waitForDisplayed({timeout:1500});
            await submitSearch.click();
        }catch(e){
            await browser.keys("\uE007");
        }



    }

    public async typeIntoSearchBar(keyword:string){
        const googleSearchField = await this.searchField;
        await googleSearchField.waitForDisplayed({ timeout:3000,timeoutMsg:'Google search field is not displayed'});
        await googleSearchField.setValue(keyword);
    }

x
    /**
     * open the google home page
     */
    public open () {
        return super.open('google');
    }
}

export default new GoogleHomePage();
