import { Page } from "@playwright/test";

export class BasePage {
    constructor (readonly page: Page, readonly url: string) {}

    async goto() {
        this.page.goto("" + this.url);
    }
}