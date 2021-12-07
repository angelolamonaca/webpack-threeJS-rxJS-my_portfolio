export class ScrollController {
    private static _instance: ScrollController;
    pageHeight: number;

    constructor() {
        this.pageHeight = document.getElementsByTagName('html')[0].offsetHeight;
    }

    public static get Instance(): ScrollController {
        return this._instance || (this._instance = new this());
    }

    getScrollRelative(min: number, max: number) {
        return this.getScrollRelativeTo(max - min) + min;
    }

    getScrollRelativeTo(max: number) {
        return (max * scrollY) / this.pageHeight;
    }

    isBottom() {
        return this.pageHeight - scrollY < 900;
    }
}
