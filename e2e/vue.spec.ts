import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
})

test('about page', async ({ page }) => {
  await page.goto('./about');
  await expect(page.getByRole('heading', { name: /about page/ })).toBeVisible();
})
