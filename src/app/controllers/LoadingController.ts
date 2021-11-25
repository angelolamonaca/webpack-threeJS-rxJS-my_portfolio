import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { animate } from '../app';

export class LoadingController {
    private static _instance: LoadingController;

    loadingManager = new LoadingManager();
    gltfLoader = new GLTFLoader(this.loadingManager);

    public static get Instance(): LoadingController {
        return this._instance || (this._instance = new this());
    }
}

class LoadingManager extends THREE.LoadingManager {
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
    onLoad = (): void => {
        console.log('Loading complete!');
        animate();
    };
    onError = (url: string): void => {
        console.log('There was an error loadindg ' + url);
    };
}
