import { test, expect } from '@playwright/test'

test.describe('Api tests', () => {
    test('test book request', async ({ request }) => {
        let booksResponse = await request.get('https://demoqa.com/BookStore/v1/Books');
        expect(booksResponse.status()).toEqual(200);
        
        let list = (await booksResponse.json())['books'];
        expect(list.length).toBeGreaterThanOrEqual(8)
    
        let listAuthors = list.map(n => n.author)
        expect(listAuthors).toContain("Addy Osmani")
        for (let a of list) {
            if (a.isbn === "9781449331818") {
                expect(a.title).toEqual("Learning JavaScript Design Patterns");
            }
        }
    })
    test('authorize', async ({ request }) => {
        const autoriziUser = await request.post('https://demoqa.com/Account/v1/Authorized', {
            data: {
                "userName": "Andrey",
                "password": "12345Qw!"
            }
        });
        expect(autoriziUser.status()).toEqual(200);
        expect(await autoriziUser.json()).toEqual(false)
    })
})