import { Lights } from '../models/Lights';
import { CameraController } from './CameraController';

export class LightController {
    private static _instance: LightController;
    lights: Lights;

    constructor() {
        this.lights = new Lights();
    }

    public static get Instance(): LightController {
        return this._instance || (this._instance = new this());
    }

    animate(): void {
        this.lights.spotLight.position.set(
            CameraController.Instance.camera.position.x + 10,
            CameraController.Instance.camera.position.y + 10,
            CameraController.Instance.camera.position.z + 10
        );
    }
}
