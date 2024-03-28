import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/Theme');
  await page.getByText('Betriebssystem3 Fragen').click();
  await page.getByRole('button', { name: 'Ein Prozess ist' }).click();
  await page.getByRole('heading', { name: '...... eine Instanz eines' }).click();
  await page.getByRole('button', { name: 'Circle' }).nth(1).click();
  await page.getByRole('button', { name: 'Circle' }).first().click();
  await page.getByRole('heading', { name: '/3' }).click();
});