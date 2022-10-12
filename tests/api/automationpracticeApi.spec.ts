import { test, expect } from '@playwright/test'

test.describe("some Api tests", () => {

    test("ss", async ({ request }) => {
       let a =  await request.post("http://automationpractice.com/index.php", {
            headers: {
                "Cookie": "PrestaShop-a30a9934ef476d11b6cc3c983616e364=6gPi%2Bf0FmTAHg4HAzFZd6lym6Yg5BgzjKMZeSSSu5kclIa4KlplzTjVV%2BfyLUTDL3P9eDob%2F6S3072XsOUNi8HbUCzL0Ztx9IZEpxuIDU4s1V6XV65diJQZiw5m627mxHWg%2FZjHimi8U1T4iYqbniRJJzRDwSGQf0WPPYfgjTmho%2FFTiA5Oyrr9awEfgXb8f1t5UvCF2kgaCp1ASibfOpyQGsKMVMT%2B8%2FYsKujbVEP%2BzfRDyOhZFmgHWUhKHfmn6x5vDm2x2i%2BVH34SO%2FSGnc26aqKPvbWmrGTW195%2Fgt%2FMut5kJg0qWczBZrNp%2Fw4XqQyQmN0BH3Q9udqQbUOm0xjnBBaMzcMAX4XwZqqDPHqkFEM4Q67pYS5fGWkN1VFjPaCOq3IMd0W9IJXzF5eZadkM0yEA0ss2%2F1oZaqumRdn2%2Bc3bzuWI3IpCwRyyDbE4LFTgX2BIGFSeZYRc62qod5mcJQM4%2BzViPpwJNbNAioTSDb3ZZv6FKNcZPJIpxbmBdU%2BkkeVfYPfPpHbR57qmcgA%3D%3D000394",
                "Origin": "http://automationpractice.com",
                "Referer": "http://automationpractice.com/index.php?id_category=9&controller=category",
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
        expect(a.status()).toEqual(200);
    })
})