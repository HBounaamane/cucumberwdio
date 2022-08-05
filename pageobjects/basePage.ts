/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens specific page
    * @param path
    */
    public open (path: string) {
        return browser.url(`http://${path}.com`);
    }
}
