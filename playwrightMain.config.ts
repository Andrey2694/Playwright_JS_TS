import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // globalSetup: require.resolve('./global-setup'),
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  // reporter: 'allure-playwright',
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    trace: 'on',
    headless: false,
    // ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
    // storageState: 'resources/storageState.json'    
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   testMatch: /.*.sanity.spec.ts/,
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     // viewport: { width: 600, height: 720 }
    //   },
    // },
    {
      name: 'chromium2',
      testMatch: /.*.spec.ts/,
      use: {
        ...devices['Desktop Chrome'],    
        viewport: {width: 120, height: 180}
      },
    },
  ],
};

export default config;
