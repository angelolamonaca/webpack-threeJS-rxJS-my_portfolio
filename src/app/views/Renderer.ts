import * as THREE from 'three';

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
}
