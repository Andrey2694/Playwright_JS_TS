// global-setup.ts
import { request } from '@playwright/test';

async function globalSetup() {
  const requestContext = await request.newContext();
  await requestContext.post('https://api.staging.cheq-platform.com/profile/login', {
    headers: {
        'origin': 'https://ppc.staging.cheq-platform.com/',
        'accept': 'application/json'
    },
    data: {
      'username': 'RamiUserAdmin',
      'password': 'network11',
      'returnUrl': 'https://ppc.staging.cheq-platform.com/'
    }
  });
  // Save signed-in state to 'storageState.json'.
  await requestContext.storageState({ path: 'storageState.json' });
  await requestContext.dispose();
}

export default globalSetup;