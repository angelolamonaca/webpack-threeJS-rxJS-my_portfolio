import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { animate, render, renderer } from '../app';
import { forEach } from 'lodash-es';
import { CameraController } from './CameraController';
import { delay } from '../shared/Utils';

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
    onLoad = async (): Promise<void> => {
        console.log('Loading complete!');
        renderer.update();
        animate();
        await delay(3000);
        // Hide Loading Page
        document.getElementById('loading')!.style.opacity = '0';
        document.getElementById('loading')!.style.zIndex = '0';
        await delay(1000);
        // Show canvas
        document.getElementsByTagName('canvas')![0].style.opacity = '1';
        await delay(500);
        // Show contact buttons
        document.getElementById('container')!.style.opacity = '1';
    };
    onError = (url: string): void => {
        console.log('There was an error loading ' + url);
    };
}
