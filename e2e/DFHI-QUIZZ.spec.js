import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Start Quiz' }).click();
  await page.getByText('Betriebssystem3 Fragen').click();
  await page.getByRole('button', { name: 'der Prozessor' }).click();
  await page.getByRole('button', { name: 'Circle' }).nth(1).click();
  await page.getByRole('button', { name: 'ausgeführt, bereit oder wartend' }).click();
  await page.getByRole('button', { name: 'Circle' }).nth(1).click();
  await page.getByRole('button', { name: 'einer Betriebsprüfung' }).click();
  await page.getByRole('button', { name: 'Circle' }).nth(1).click();
  await page.getByRole('button', { name: 'Zur Themen-Seite' }).click();
  await page.getByRole('link', { name: 'Kontakt' }).click();
  await page.getByRole('link', { name: 'Über uns' }).click();
  await page.getByRole('link', { name: 'Datenschutz' }).click();
  await page.getByRole('link', { name: 'Kontakt' }).click();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('fr');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('ee@yahoo.fr');
  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('ddd');
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByRole('link', { name: 'Go back to Quiz' }).click();
});