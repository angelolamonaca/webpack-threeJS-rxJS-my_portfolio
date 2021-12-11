import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { animate, renderer } from '../app';
import { delay } from '../shared/Utils';
import { LoadingManager } from 'three';

export class CustomLoadingController {
    private static _instance: CustomLoadingController;
    loadingComplete: boolean = false;
    loadingManager = new CustomLoadingManager();
    gltfLoader = new GLTFLoader(this.loadingManager);

    public static get Instance(): CustomLoadingController {
        return this._instance || (this._instance = new this());
    }
}

class CustomLoadingManager extends LoadingManager {
    constructor() {
        super();
    }

    onStart = (url: string, itemsLoaded: number, itemsTotal: number): void => {
        console.log(
            'Started loading file: ' +
                url +
                '.\nLoaded ' +
                itemsLoaded +
                ' of ' +
                itemsTotal +
                ' files.'
        );
        document.getElementById('loading')!.removeAttribute('hidden');
    };
    onProgress = (url: string, itemsLoaded: number, itemsTotal: number): void => {
        console.log(
            'Loading file: ' +
                url.substr(0, 30) +
                '.\nLoaded ' +
                itemsLoaded +
                ' of ' +
                itemsTotal +
                ' files.'
        );
    };
    onLoad = async (): Promise<void> => {
        console.log('Loading complete!');
        document.getElementById('container')!.removeAttribute('hidden');
        renderer.update();
        animate();
        await delay(3000);
        // Hide Loading Page
        document.getElementById('loading')!.style.opacity = '0';
        document.getElementById('loading')!.style.zIndex = '0';
        await delay(1000);
        // Show canvas
        document.getElementsByTagName('canvas')![0].style.opacity = '0.5';
        await delay(500);
        CustomLoadingController.Instance.loadingComplete = true;
    };
    onError = (url: string): void => {
        console.log('There was an error loading ' + url);
    };
}
