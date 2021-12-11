import * as THREE from 'three';
import { CameraController } from '../controllers/CameraController';
import { render, renderer } from '../app';

export class Renderer extends THREE.WebGLRenderer {
    constructor() {
        super({ antialias: true });
        this.setPixelRatio(window.devicePixelRatio);
        this.setSize(window.innerWidth, window.innerHeight);
        this.outputEncoding = THREE.sRGBEncoding;
        this.toneMapping = THREE.ReinhardToneMapping;
        this.toneMappingExposure = 2.3;
        this.shadowMap.enabled = true;
    }

    update() {
        CameraController.Instance.camera.aspect = window.innerWidth / window.innerHeight;
        CameraController.Instance.camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }
}
