import { Locator, Page } from "@playwright/test";

export class DressPage {
    readonly page: Page;
    readonly sizeSCheckBox: Locator;
    readonly addToCartButton: Locator;
    readonly sortByButton: Locator;
    readonly enableFiltersSizeS: Locator;
    readonly dressItemContainer: Locator;
    readonly successfullyTitle: Locator;
				
    constructor(page: Page) {
        this.page = page;
        this.sizeSCheckBox = page.locator("#uniform-layered_id_attribute_group_1 #layered_id_attribute_group_1");
        this.sortByButton = page.locator("#uniform-selectProductSort #selectProductSort");
        this.addToCartButton = page.locator("[title = 'Add to cart']");
        this.enableFiltersSizeS = page.locator("//div[@id = 'enabled_filters']//li[contains(., 'Size: S')]");
        this.dressItemContainer = page.locator(".product-container");
        this.successfullyTitle = page.getByText("Product successfully added to your shopping cart")
    }
}