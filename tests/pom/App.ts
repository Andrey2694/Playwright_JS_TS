import { BrowserContext, Locator, Page } from "@playwright/test";
import { PageProvider } from "./PageProvider";

export class App extends PageProvider {

    constructor(page: Page, private browserContext: BrowserContext) {
        super(page);
    }

    public async closeBrowser() {
        await this.page.close();
    }
    
    public async openNewBrowserPage() {
        Object.keys(this).forEach((key: string) => {
            if (key !== "browserContext") {
                (this as any)[key] = undefined;
            }
        });

        const newPage = await this.browserContext.newPage();
        this.page = newPage;
    }

    public async openNewBrowserPageByClickingOnLink(link: Locator) {
        Object.keys(this).forEach((key: string) => {
            if (key !== "browserContext") {
                (this as any)[key] = undefined;
            }
        });

        const [newPage] = await Promise.all([
            this.browserContext.waitForEvent("page"),
            link.click()
        ]);
        this.page = newPage;
    }
}