import { When} from '@wdio/cucumber-framework';
import googleHomePage from "../../pageobjects/GoogleHomePage";




When(/^the user searches for "(.*)" into the search bar$/, async (keyword) => {
    await googleHomePage.googleSearch(keyword);
});


When(/^the user enters "(.*)" into the search bar$/, async (keyword) => {
    await googleHomePage.typeIntoSearchBar(keyword);
});
