import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv'

dotenv.config();

async function globalSetup(config: FullConfig) {

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${process.env.URL}/index.php?controller=authentication&back=my-account`);
  await page.locator('#email').fill(`${process.env.EMAIL}`);
  await page.locator('#passwd').fill(`${process.env.PASSWORD}`);
  await page.locator('#SubmitLogin').click();

  await page.context().storageState({ path: 'resources/storageState.json' });
  await browser.close();
}

export default globalSetup;