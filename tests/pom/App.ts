import { BrowserContext, Page } from "@playwright/test";
import { PageProvider } from "./PageProvider";

export class App extends PageProvider {

    constructor(page: Page, private browserContext: BrowserContext) {
        super(page);
    }

    public async closeBrowser() {
        await this.page.close();
    }
}