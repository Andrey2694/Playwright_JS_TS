import { Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly blousseItem: Locator;
    readonly summaryProcessButton: Locator;
    readonly adressProcessButton: Locator;
    readonly shippingProcessButton: Locator;
    readonly termsOfServiceCheckbox: Locator;
    readonly payByBankWireButton: Locator;
    readonly paymentConfirmButton: Locator;
    readonly orderIsCompleteTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blousseItem = page.locator("#cart_summary .product-name > a");
        this.summaryProcessButton = page.locator(".cart_navigation [title = 'Proceed to checkout']");
        this.adressProcessButton = page.locator("[name = 'processAddress']");
        this.termsOfServiceCheckbox = page.locator("#cgv");
        this.shippingProcessButton = page.locator("[name = 'processCarrier']");
        this.payByBankWireButton = page.locator("[title = 'Pay by bank wire']");
        this.paymentConfirmButton = page.locator("span", {hasText: "I confirm my order"});
        this.orderIsCompleteTitle = page.getByText("Your order on My Store is complete.");
    }
}
