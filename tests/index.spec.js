import {test, expect} from '@playwright/test';

test.describe('PW Blob', () => {
    test.beforeEach(async ({page}) => {
        await page.route('**', async (route) => {
            await route.continue();
        });
    })
    test('renders message [1]', async ({page}) => {
        await page.goto('/');
        await expect(page.getByTestId('message')).toHaveText('Playwright is working!');
    });


    test('renders message [2]', async ({page}) => {
        await page.goto('/index2.html');
        await expect(page.getByTestId('message')).toHaveText('Playwright is working!');
    });

    test('should open second page with "Second Page" heading', async ({page, context}) => {
        await page.goto('/index3.html');

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click('button'),
        ]);

        await newPage.waitForLoadState();

        const heading = newPage.locator('h1');
        await expect(heading).toHaveText('Second Page');
    });
})