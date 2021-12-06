import * as THREE from 'three';
import { sceneController } from '../app';
import { colours } from '../shared/Color';

export class Lights {
    spotLight: THREE.SpotLight;

    constructor() {
        this.spotLight = new THREE.SpotLight(colours.burlywood, 2);
        sceneController.world.addLight(this.spotLight);
    }
}
