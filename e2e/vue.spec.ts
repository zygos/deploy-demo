import { test as it, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
it('displays the heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('You did it!');
})

it('displays a counter button', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('button')).toBeVisible()
})
