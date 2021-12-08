import * as THREE from 'three';
import { sceneController } from '../app';
import { colours } from '../shared/Color';

export class Lights {
    spotLight: THREE.SpotLight;
    spotLightEye: THREE.SpotLight;

    constructor() {
        this.spotLight = new THREE.SpotLight(colours.burlywood);
        sceneController.world.addLight(this.spotLight);

        this.spotLightEye = new THREE.SpotLight(colours.burlywood);
        sceneController.world.addLight(this.spotLightEye);
    }
}
