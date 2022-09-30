import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

test.describe('hello', () => {
  // test.skip(({ browserName }) => browserName !== 'firefox', 'Chromium only!');

  test('FIRST SMOKE', async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev/');
    await expect.soft(page).toHaveTitle(/Playwright/);

    const getStarted = page.locator('text=Get Started');
    await expect.soft(getStarted, 'AAAAA PAMAGITE').toHaveAttribute('href', '/docs/intro');

    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await getStarted.click();
    // await expect.soft(page).toHaveURL(/.*intro/);
    await expect.poll(async () => {
      return page.url();
    }, {
      message: 'aaaaaa',
      timeout: 20000
    }).toEqual('https://playwright.dev/docs/intro')
  });

  test('SECOND SMOKE @login', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    const getStarted = page.locator('text=Get Started');
    await expect(getStarted).toHaveAttribute('href', '/docs/intro');
    await getStarted.click();
    await expect(page).toHaveURL(/.*intro/);
  });

})

