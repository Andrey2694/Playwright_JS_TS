// BY API

// import { request } from '@playwright/test';

// async function globalSetup() {
//   const requestContext = await request.newContext();
//   await requestContext.post('url', {
//     headers: {
//         'origin': 'url',
//         'accept': 'application/json'
//     },
//     data: {
//       'username': '',
//       'password': '',
//       'returnUrl': 'url'
//     }
//   });
//   // Save signed-in state to 'storageState.json'.
// await requestContext.storageState({ path: 'resources/storageState.json' });
//   await requestContext.dispose();
// }

// export default globalSetup;

//BY UI
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  await page.locator('#email').fill('qatest@test99.com');
  await page.locator('#passwd').fill('qatest@test99.com');
  await page.locator('#SubmitLogin').click();

  await page.context().storageState({ path: 'resources/storageState.json' });
  await browser.close();
}

export default globalSetup;