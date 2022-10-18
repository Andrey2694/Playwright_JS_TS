import dotenv from 'dotenv'

dotenv.config();

export class AppApiHelper {

    public static async addItemToCart(request) {
        let count = 0;
        let statusCode = null;

        do {
            statusCode = await this.sendRequestAddItemToCart(request);
        }
        while (statusCode !== 200 && count < 5)

        return statusCode;
    }

    private static async sendRequestAddItemToCart(request) {
        const cookie = require("../../resources/storageState.json")
        let baseURL = process.env.URL;
        let response = await request.post(`${baseURL}/index.php`, {
            headers: {
                "Cookie": `${cookie.cookies[0].name}=${cookie.cookies[0].value}}`,
                "Origin": baseURL,
                "Referer": `${baseURL}/index.php?id_category=9&controller=category`,
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "content-type": "application/json"
            }, params: {
                "rand": "1665579305932",
                "controller": "cart",
                "add": "1",
                "ajax": "true",
                "qty": "1",
                "id_product": "3",
                "token": "fa319f801ccb25fc9cceb41a84b11daa",
            }
        })
        return response.status();
    }
}