import { test, expect } from '@playwright/test'

test.use({storageState: "storageState.json"})
test.describe('Login via cookies', () => {
    test('test1', async ({ page }) => {
        await page.goto('https://ppc.staging.cheq-platform.com')
        await expect(page).toHaveURL('https://ppc.staging.cheq-platform.com/dashboard/paid_marketing')
    })
    
    test('test2', async ({ page }) => {
        await page.goto('https://ppc.staging.cheq-platform.com')
        await expect(page).toHaveURL('https://ppc.staging.cheq-platform.com/dashboard/paid_marketing')
    })
})