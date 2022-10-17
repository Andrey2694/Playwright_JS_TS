import { test, expect } from '../CastomFixtures'
import { AutomationpracticeApiHelper } from '../helpers/automationpractice.spec'
import { ScreenShots } from '../utils/screenshot'
import dotenv from 'dotenv'

dotenv.config();

test.use({ storageState: "resources/storageState.json" })

test.describe("UI tests for automationpractice website", () => {
    let mainPage;

    test.beforeEach(async ({ app }) => {
        mainPage = app.mainPage;
    })

    test.afterAll(({ app }) => {
        app.closeBrowser();
    })
    test("Add item to Cart", async ({ app }, testInfo) => {
        let mainPage = app.mainPage;
        let dressPage = app.dressPage;

        await mainPage.goto();
        await mainPage.openCasualDressPage();
        await dressPage.sizeSCheckBox.click();
        await dressPage.sortByButton.selectOption("price:asc");
        await expect(dressPage.enableFiltersSizeS).toBeVisible();

        await dressPage.dressItemContainer.hover();
        await dressPage.addToCartButton.click();
        await expect(dressPage.successfullyTitel).toBeVisible();
        ScreenShots.takeFullSizeScreenshot(app.page, testInfo);
    })

    test("add Item by API and buy it via Cart", async ({ app, request }) => {
        let cartPage = app.cartPage;

        expect(await AutomationpracticeApiHelper.addItemToCartByApi(request)).toEqual(200);

        await mainPage.goto();
        await mainPage.cartButton.click();
        await expect(app.page).toHaveURL(/.*?controller=order/);
        await expect(cartPage.blousseItem).toBeVisible();

        await cartPage.summaryProcessButton.click();
        await cartPage.adressProcessButton.click();
        await cartPage.termsOfServiceCheckbox.check();
        await expect(cartPage.termsOfServiceCheckbox.isChecked).toBeTruthy();

        await cartPage.shippingProcessButton.click();
        await cartPage.payByBankWireButton.click();
        await expect(app.page).toHaveURL(/.*module=bankwire*/)

        await cartPage.paymentConfirmButton.click();
        await expect(cartPage.orderIsCompleteTitle).toBeVisible();
    })
})