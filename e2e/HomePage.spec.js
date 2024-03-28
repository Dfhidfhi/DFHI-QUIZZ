import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('img', { name: 'imageDFHILogo' }).click();
  await page.getByRole('button', { name: 'Start Quiz' }).click();
  await page.getByText('Java3 Fragen').click();
  await page.getByRole('button', { name: 'Java Runtime Environment' }).click();
});