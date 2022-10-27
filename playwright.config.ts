import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./global-setup"),
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 120 * 1000,
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
  workers: process.env.CI ? 10 : undefined,
  reporter: "html",
  // reporter: "allure-playwright",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    trace: "retain-on-failure",
    headless: true,
    // ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    storageState: "resources/storageState.json"    
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
      name: "mainChrome",
      testMatch: /.*.spec.ts/,
      use: {
        ...devices["Desktop Chrome"], 
        baseURL: process.env.URL
        // viewport: {width: 1920, height: 1080}
      }
    }
  ]

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/', 

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
