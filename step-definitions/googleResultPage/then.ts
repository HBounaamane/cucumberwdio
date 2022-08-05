import { Then} from '@wdio/cucumber-framework';
import googleResultPage from '../../pageobjects/resultsPage';
import * as assert from "assert";



Then(/^links related to (.*) are shown on the result page$/, async (keyword) => {

    const LinksText = await googleResultPage.getTextFromLinkResult();
    //await browser.debug()

    for(const link of LinksText){

        assert(
            link.toLowerCase().includes(keyword),
            `Link ${link} does not include ${keyword}`
        )

    }


});



Then(/no links related to (.*)are shown/, async (keyword) => {

    const isResultDisplayed = await googleResultPage.isResultLinksDisplayed()
    const resultMessage = await googleResultPage.getTextResultOfGoogleHeadMessage();
    console.log(`Your search - ${keyword} - did not match any documents`);
    assert(
        isResultDisplayed === false,'Results are displayed !!!'
    );

    assert(
        resultMessage.includes(`did not match any documents`),'links are displayed !!'
    )

});


Then(/a List box is displayed showing suggestions related to user search/, async () => {

    const isSuggestionDisplayed = await googleResultPage.isListBoxDisplayed()

    assert(
        isSuggestionDisplayed === true,'no suggestion for your research !!!'
    );


});
