import { test, expect } from '@playwright/test'
import { MainPage } from '../pages/Main'
import { DressPage } from '../pages/Dress'
import { AutomationpracticeApiHelper } from '../helpers/automationpractice.spec'
import { CartPage } from '../pages/Cart'
import { ScreenShots } from '../utils/screenshot'
import dotenv from 'dotenv'

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

dotenv.config();

test.use({ storageState: "resources/storageState.json" })

test.describe("UI tests for automationpractice website", () => {
    let mainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
    })
    test("Add item to Cart", async ({ page }, testInfo) => {
        let dressPage = new DressPage(page);

        await mainPage.goto();
        await mainPage.openCasualDressPage();
        await dressPage.sizeSCheckBox.click();
        await dressPage.sortByButton.selectOption("price:asc");
        await expect(dressPage.enableFiltersSizeS).toBeVisible();

        await dressPage.dressItemContainer.hover();
        await dressPage.addToCartButton.click();
        await expect(dressPage.successfullyTitel).toBeVisible();
        ScreenShots.takeFullSizeScreenshot(page, testInfo);
    })

    test("add Item by API and buy it via Cart", async ({ page, request }) => {
        let cartPage = new CartPage(page);

        expect(await AutomationpracticeApiHelper.addItemToCartByApi(request)).toEqual(200);

        await mainPage.goto();
        await mainPage.cartButton.click();
        await expect(page).toHaveURL(/.*?controller=order/);
        await expect(cartPage.blousseItem).toBeVisible();

        await cartPage.summaryProcessButton.click();
        await cartPage.adressProcessButton.click();
        await cartPage.termsOfServiceCheckbox.check();
        await expect(cartPage.termsOfServiceCheckbox.isChecked).toBeTruthy();

        await cartPage.shippingProcessButton.click();
        await cartPage.payByBankWireButton.click();
        await expect(page).toHaveURL(/.*module=bankwire*/)

        await cartPage.paymentConfirmButton.click();
        await expect(cartPage.orderIsCompleteTitle).toBeVisible();
    })
})