import { sceneController } from '../app';
import { colours } from '../shared/Color';
import { SpotLight } from 'three';

export class Lights {
    spotLight: SpotLight;
    spotLightEye: SpotLight;

    constructor() {
        this.spotLight = new SpotLight(colours.burlywood);
        sceneController.world.addLight(this.spotLight);

        this.spotLightEye = new SpotLight(colours.burlywood);
        sceneController.world.addLight(this.spotLightEye);
    }
}
