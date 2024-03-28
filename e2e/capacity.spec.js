import { chromium, test } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch();
    const contexts = [];
    const pages = [];

    for (let i = 0; i < 20; i++) {
        const context = await browser.newContext();
        const page = await context.newPage();
        contexts.push(context);
        pages.push(page);
    }
    const promises = pages.map(async (page) => {
        await page.goto('http://localhost:5173/');
        await page.getByRole('img', { name: 'imageDFHILogo' }).click();
        await page.getByRole('button', { name: 'Start Quiz' }).click();
        await page.getByText('Java3 Fragen').click();
        await page.getByRole('button', { name: 'Java Runtime Environment' }).click();
        
    });

    await Promise.all(promises);


});