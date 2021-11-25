import { Camera } from '../models/Camera';
import { sceneController } from '../app';

export class CameraController {
    private static _instance: CameraController;
    camera: Camera;

    constructor() {
        this.camera = new Camera();
        this.camera.lookAt(sceneController.itachi.getFacePosition());
    }

    public static get Instance(): CameraController {
        return this._instance || (this._instance = new this());
    }
}
