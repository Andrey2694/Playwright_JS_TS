import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

test.describe('hello', () => {
  // test.skip(({ browserName }) => browserName !== 'firefox', 'Chromium only!');
  test('SANITY TEST', async ({ page }) => {
    page.on('response', res => console.log(`<<< ${res.url()}`))
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    const getStarted = page.locator('text=Get Started');
    await expect(getStarted).toHaveAttribute('href', '/docs/intro');
    await getStarted.click();
    await expect(page).toHaveURL(/.*intro/);
  });
})

