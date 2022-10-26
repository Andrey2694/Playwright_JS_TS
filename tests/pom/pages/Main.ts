import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage{
    readonly dressButton = this.page.locator("//div[@id = 'block_top_menu']/ul/li/a[text() = 'Dresses']");
    readonly casualDressButton = this.page.locator(".sfHover a", { hasText: "Casual Dresses" });
    readonly cartButton = this.page.locator("[title = 'View my shopping cart']");
    readonly faceBookLink = this.page.locator("#social_block .facebook");

    constructor (readonly page: Page) {
        super(page, "");
    }

    async openCasualDressPage() {
        await this.dressButton.hover();
        await this.casualDressButton.click();
    }
}