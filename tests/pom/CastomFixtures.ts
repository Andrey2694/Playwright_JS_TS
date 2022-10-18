import { test as base } from '@playwright/test';

import { App } from './App';

type CustomFixtures = {
  app: App;
};

export const test = base.extend<CustomFixtures>({
  app: async ({ page, context }, use) => {
    await use(new App(page, context));
  },
});

export { expect } from '@playwright/test';