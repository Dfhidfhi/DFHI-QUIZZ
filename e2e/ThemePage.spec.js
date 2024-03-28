import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/Theme');
  await page.getByRole('heading', { name: 'DFHI-Quizz' }).click();
  await page.getByPlaceholder('Suche....').click();
  await page.getByPlaceholder('Suche....').fill('j');
  await page.getByRole('img', { name: 'lectureImage' }).first().click();
});