import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npx serve . -l 3001',
    port: 3001,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3001',
  },
});
