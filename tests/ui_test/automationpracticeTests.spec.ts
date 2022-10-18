import { test, expect } from "../pom/CastomFixtures";
import { AppApiHelper } from "../helpers/AppApiHelper.spec";
import { Screenshots } from "../utils/Screenshots";
import dotenv from "dotenv";
import { MainPage } from "../pom/pages/Main";

dotenv.config();

test.use({ storageState: "resources/storageState.json" });

test.describe("UI tests for automationpractice website", () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ app }) => {
        mainPage = app.mainPage;
    });

    test.afterAll(({ app }) => {
        app.closeBrowser();
    });
    test("Add item to Cart", async ({ app }, testInfo) => {
        const dressPage = app.dressPage;

        await mainPage.goto();
        await mainPage.openCasualDressPage();
        await dressPage.sizeSCheckBox.click();
        await dressPage.sortByButton.selectOption("price:asc");
        await expect(dressPage.enableFiltersSizeS).toBeVisible();
        Screenshots.addFullSizeScreenshotToReport(app.page, testInfo);

        await dressPage.dressItemContainer.hover();
        await dressPage.addToCartButton.click();
        await expect(dressPage.successfullyTitle).toBeVisible();
    });

    test("add Item by API and buy it via Cart", async ({ app, request }) => {
        const cartPage = app.cartPage;
        expect(await AppApiHelper.addItemToCart(request)).toEqual(200);

        await mainPage.goto();
        await mainPage.cartButton.click();
        await expect(app.page).toHaveURL(/.*?controller=order/);
        await expect(cartPage.blousseItem).toBeVisible();

        await cartPage.summaryProcessButton.click();
        await cartPage.adressProcessButton.click();
        await cartPage.termsOfServiceCheckbox.check();
        expect(cartPage.termsOfServiceCheckbox.isChecked()).toBeTruthy();

        await cartPage.shippingProcessButton.click();
        await cartPage.payByBankWireButton.click();
        await expect(app.page).toHaveURL(/.*module=bankwire*/);

        await cartPage.paymentConfirmButton.click();
        await expect(cartPage.orderIsCompleteTitle).toBeVisible();
    });

});