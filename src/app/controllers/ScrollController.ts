export class ScrollController {
    private static _instance: ScrollController;
    scrollPercentage: number;
    static pageHeight: number;

    constructor() {
        this.scrollPercentage = 0;
    }

    public static get Instance(): ScrollController {
        return this._instance || (this._instance = new this());
    }

    /**
     *
     * @param min is the relative value when scroll is at begin page
     * @param max is the relative value when scroll is at end page
     * Returns the relative value
     */
    getGlobalScrollRelative(min: number, max: number): number {
        return ((max - min) * window.scrollY) / ScrollController.pageHeight + min;
    }

    /**
     *
     * @param min is the relative value when scroll is at begin page
     * @param max is the relative value when scroll is at end page
     * @param maxScrollPercentage the ScrollPercentage when the value is max
     * Returns the relative value
     */
    getPartialScrollRelative(min: number, max: number, maxScrollPercentage: number): number {
        return (
            ((max - min) * (window.scrollY + window.innerHeight)) /
                ScrollController.Instance.convertScrollPercentageToPageHeight(maxScrollPercentage) +
            min
        );
    }

    /**
     * It detects the percentage of global scrolling
     */
    detectScrollPercentage(): void {
        ScrollController.Instance.scrollPercentage = Math.round(
            (window.scrollY * 100) / ScrollController.pageHeight
        );
    }

    /**
     * Returns true if we scrolled to the bottom
     */
    isBottom(): boolean {
        if (!ScrollController.pageHeight) return false;
        return ScrollController.pageHeight - window.scrollY < window.innerHeight + 100;
    }

    convertScrollPercentageToPageHeight(scrollPercentage: number): number {
        return ScrollController.pageHeight * (scrollPercentage / 100);
    }
}
