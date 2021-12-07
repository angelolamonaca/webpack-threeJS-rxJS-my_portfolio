export class ScrollController {
    private static _instance: ScrollController;
    pageHeight: number;
    innerHeight: number;

    constructor() {
        this.pageHeight = document.getElementsByTagName('html')[0].offsetHeight;
        this.innerHeight = window.innerHeight;
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
        return this.pageHeight - scrollY < innerHeight + 100;
    }
}
