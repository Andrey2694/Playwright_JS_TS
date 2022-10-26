import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    readonly blousseItem = this.page.locator("#cart_summary .product-name > a");
    readonly summaryProcessButton = this.page.locator(".cart_navigation [title = 'Proceed to checkout']");
    readonly adressProcessButton = this.page.locator("[name = 'processAddress']");
    readonly termsOfServiceCheckbox = this.page.locator("#cgv");
    readonly shippingProcessButton = this.page.locator("[name = 'processCarrier']");
    readonly payByBankWireButton = this.page.locator("[title = 'Pay by bank wire']");
    readonly paymentConfirmButton = this.page.locator("span", {hasText: "I confirm my order"});
    readonly orderIsCompleteTitle = this.page.getByText("Your order on My Store is complete.");

    constructor(readonly page: Page) {
        super(page, "?controller=order");
    }
}
