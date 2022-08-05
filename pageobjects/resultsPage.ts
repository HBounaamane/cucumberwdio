import BasePage from "./basePage";

class ResultsPage extends BasePage {
  get searchResultsLinks() {
    return $$('div[class="jtfYYd UK95Uc"]');
  }

  get headGoogleMessageSearchResult() {
    return $('p[role="heading"]');
  }

  get listBox() {
    return $(".erkvQe");
  }

  async getTextFromLinkResult(): Promise<string[]> {
    const linkTextArray: string[] = [];
    const linkElem = await this.searchResultsLinks;
    for (const link of linkElem) {
      await link.waitForExist({ timeout: 5000 });
      const linkText = await link.getText();
      await linkTextArray.push(linkText);
      console.log("this is the text array", linkTextArray);
    }
    console.log("this is the text array", linkTextArray);
    return linkTextArray;
  }

  public async isResultLinksDisplayed(): Promise<boolean> {
    try {
      const linksResults = await this.searchResultsLinks;
      await linksResults[0].waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      return false;
    }
    return true;
  }

  public async getTextResultOfGoogleHeadMessage(): Promise<string> {
    const element = await this.headGoogleMessageSearchResult;
    await element.waitForDisplayed({ timeout: 2000 });
    return element.getText();
  }

  public async isListBoxDisplayed(): Promise<boolean> {
    try {
      const elementListBox = await this.listBox;
      await elementListBox.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      return false;
    }
    return true;
  }
}

export default new ResultsPage();
