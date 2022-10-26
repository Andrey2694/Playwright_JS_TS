import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DressPage extends BasePage {
    readonly sizeSCheckBox = this.page.locator("#uniform-layered_id_attribute_group_1 #layered_id_attribute_group_1");
    readonly sortByButton = this.page.locator("#uniform-selectProductSort #selectProductSort");
    readonly addToCartButton = this.page.locator("[title = 'Add to cart']");
    readonly enableFiltersSizeS = this.page.locator("//div[@id = 'enabled_filters']//li[contains(., 'Size: S')]");
    readonly dressItemContainer = this.page.locator(".product-container");
    readonly successfullyTitle = this.page.getByText("Product successfully added to your shopping cart");

    constructor(readonly page: Page) {
        super(page, "?id_category=8&controller=category");
    }
}