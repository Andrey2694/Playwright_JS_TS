g
export class Screenshots {
    static async addFullSizeScreenshotToReport(page, testInfo) {
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach("screenshot", { body: screenshot, contentType: "image/png" });
    }
}