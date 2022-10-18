import { Page, Locator } from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly dressButton: Locator;
    readonly casualDressButton: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dressButton = page.locator("//div[@id = 'block_top_menu']/ul/li/a[text() = 'Dresses']");
        this.casualDressButton = page.locator(".sfHover a", { hasText: "Casual Dresses" });
        this.cartButton = page.locator("[title = 'View my shopping cart']");
    }

    async goto() {
        this.page.goto("");
    }

    async openCasualDressPage() {
        await this.dressButton.hover();
        await this.casualDressButton.click();
    }
}