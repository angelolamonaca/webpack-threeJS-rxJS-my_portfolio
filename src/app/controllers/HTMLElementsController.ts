import { LoadingController } from './LoadingController';

export class HTMLElementsController {
    private static _instance: HTMLElementsController;

    public static get Instance(): HTMLElementsController {
        return this._instance || (this._instance = new this());
    }

    animate() {
        HTMLElementsController.Instance.showElementIfOnView('discord');
        HTMLElementsController.Instance.showElementIfOnView('github');
        HTMLElementsController.Instance.showElementIfOnView('linkedin');
    }

    showElementIfOnView(elementId: string) {
        if (!LoadingController.Instance.loadingComplete) return;
        const element: HTMLElement | null = document.getElementById(elementId);
        const elementBoundingClientRect = element!.getBoundingClientRect();
        const elementIsOnView =
            elementBoundingClientRect.top > 0 && elementBoundingClientRect.top < window.innerHeight;
        if (elementIsOnView) element!.style.opacity = '1';
        else element!.style.opacity = '0';
    }
}
