import { Lights } from '../models/Lights';
import { CameraController } from './CameraController';
import { ScrollController } from './ScrollController';

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
        LightController.Instance.lights.spotLight.position.set(
            CameraController.Instance.camera.position.x + 10,
            CameraController.Instance.camera.position.y + 10,
            CameraController.Instance.camera.position.z + 10
        );
        LightController.Instance.lights.spotLightEye.position.set(
            CameraController.Instance.camera.position.x - 10,
            CameraController.Instance.camera.position.y + 10,
            CameraController.Instance.camera.position.z + 10
        );
        LightController.Instance.lights.spotLight.intensity =
            ScrollController.Instance.getGlobalScrollRelative(0, 1.2);
        LightController.Instance.lights.spotLightEye.intensity =
            ScrollController.Instance.getGlobalScrollRelative(0, 0.8);
    }
}
