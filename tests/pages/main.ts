import { Page, Locator, expect } from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly dressButton: Locator;
    readonly casualDressButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dressButton = page.locator("//div[@id = 'block_top_menu']/ul/li/a[text() = 'Dresses']");
        this.casualDressButton = page.locator(".sfHover a", { hasText: "Casual Dresses" });
    }

    async goto() {
        this.page.goto("http://automationpractice.com")
    }

    async openCasualDressPage() {
        await this.dressButton.hover();
        await this.casualDressButton.click();
    }
}