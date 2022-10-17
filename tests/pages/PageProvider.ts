import { Page } from "@playwright/test";
import { CartPage } from "./Cart";
import { DressPage } from "./Dress";
import { MainPage } from "./Main";

export abstract class PageProvider {
    private _dressPage: DressPage | undefined;
    private _cartPage: CartPage | undefined;
    private _mainPage: MainPage | undefined;

    get cartPage(): CartPage {
        this._cartPage ??= new CartPage(this.page);
        return this._cartPage;
    }

    get dressPage(): DressPage {
        this._dressPage ??= new DressPage(this.page);
        return this._dressPage;
    }

    get mainPage(): MainPage {
        this._mainPage ??= new MainPage(this.page);
        return this._mainPage;
    }

    protected constructor(public page: Page) { }
}
