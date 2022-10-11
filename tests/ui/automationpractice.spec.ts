import { test, expect } from '@playwright/test'
import { MainPage } from '../pages/main'
import { DressPage } from '../pages/dress'

// test.use({ storageState: "resources/storageState.json" })

test.describe("UI tests for automationpractice website", () => {

    test("Test1", async ({ page }) => {
        const mainPage = new MainPage(page);
        const dressPage = new DressPage(page);

        await mainPage.goto();
        await mainPage.openCasualDressPage();
        await dressPage.sizeSCheckBox.click();
        await dressPage.sortByButton.selectOption("price:asc");
        let a = 5;

    })
})