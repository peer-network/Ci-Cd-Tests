import { test, expect } from '@playwright/test';

test('homepage has the right title', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await expect(page).toHaveTitle(/PeerNetwork: Social Media Platform with Blockchain and Monetising/i);  
});

