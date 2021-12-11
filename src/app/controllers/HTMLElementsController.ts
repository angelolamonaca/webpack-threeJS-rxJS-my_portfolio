import { CustomLoadingController } from './CustomLoadingController';

export class HTMLElementsController {
    private static _instance: HTMLElementsController;

    public static get Instance(): HTMLElementsController {
        return this._instance || (this._instance = new this());
    }

    private static showElementIfOnView(elementId: string) {
        if (!CustomLoadingController.Instance.loadingComplete) return;
        const element: HTMLElement | null = document.getElementById(elementId);
        const elementBoundingClientRect = element!.getBoundingClientRect();
        const elementIsOnView =
            elementBoundingClientRect.top > 0 && elementBoundingClientRect.top < window.innerHeight;
        if (elementIsOnView) {
            element!.style.opacity = '1';
        } else {
            element!.style.opacity = '0';
        }
    }

    animate() {
        HTMLElementsController.showElementIfOnView('discord');
        HTMLElementsController.showElementIfOnView('github');
        HTMLElementsController.showElementIfOnView('linkedin');
        HTMLElementsController.showElementIfOnView('scroll_down_text');
    }
}
