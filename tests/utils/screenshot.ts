export class ScreenShots {
    static async takeFullSizeScreenshot(page, testInfo) {
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    }
}