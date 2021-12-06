export class ScrollController {
    private static _instance: ScrollController;
    pageHeight: number;

    constructor() {
        this.pageHeight = document.getElementsByTagName('html')[0].offsetHeight;
    }

    public static get Instance(): ScrollController {
        return this._instance || (this._instance = new this());
    }

    getScrollRelativeTo(max: number) {
        return (max * scrollY) / this.pageHeight;
    }
}
