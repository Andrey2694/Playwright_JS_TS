import { Locator, Page } from "@playwright/test";

export class DressPage {
    readonly sizeSCheckBox: Locator;
    readonly addToCartButton: Locator;
    readonly sortByButton: Locator;
    readonly priceRangeField: Locator;

    constructor(page: Page) {
        this.sizeSCheckBox = page.locator("#uniform-layered_id_attribute_group_1 #layered_id_attribute_group_1");
        this.sortByButton = page.locator("#uniform-selectProductSort #selectProductSort");
        // this.priceRangeField = page.locator("layered_price_range");
    }
}