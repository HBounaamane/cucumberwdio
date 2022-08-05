import { Given } from "@wdio/cucumber-framework";

import googleHomePage from "../../pageobjects/googleHomePage";

Given(/^the user is at the google home page$/, async () => {
  await googleHomePage.open();
  await googleHomePage.acceptGoogleCookies();
  await googleHomePage.waitForGoogleSearchPageToBeReady();
});
