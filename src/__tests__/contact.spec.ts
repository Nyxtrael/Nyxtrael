import { test, expect } from '@playwright/test';

test('submit contact form', async ({ page }) => {
  await page.goto('/contact');
  await page.getByLabel('Name').fill('John');
  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Message').fill('Test message');
  await page.getByRole('button', { name: /conjure/i }).click();
  await expect(page.getByText(/message sent/i)).toBeVisible();
});
