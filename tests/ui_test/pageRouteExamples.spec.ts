import { expect, test } from '../CastomFixtures';

test.describe('examples work with requests/responses', () => {
    test('abort all image requests', async ({ page }) => {
        await page.route('**/*', (route) => {
            if (route.request().resourceType() === 'image') {
                return route.abort()
            }
            return route.continue();
        });
        await page.goto('http://automationpractice.com/index.php')
    })

    test('change status code for requests', async ({ page }) => {
        await page.route('**/*', (route) => {
            if (route.request().url().includes('http://automationpractice.com/img/')) {
                return route.fulfill({
                    status: 404
                })
            }
            return route.continue();
        });
        await page.goto('http://automationpractice.com/index.php')

        await page.on('response', res => {
            if (res.url().includes('http://automationpractice.com/img/')) {
                expect(res.status()).toBe(404);
            }
        })
    })

    test('change response body for request ', async ({ page }) => {
        const json = require('../../resources/books.json');
        
        await page.route('https://demoqa.com/BookStore/v1/Books', (route) => {
            route.fulfill({
                contentType: 'apllication/json',
                body: JSON.stringify(json)
            })
        })
        await page.goto('https://demoqa.com/books')
        await expect(await page.locator(".action-buttons a").innerText()).toBe(json.books[0].title)
    })
})