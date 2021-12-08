import { Camera } from '../models/Camera';
import { sceneController } from '../app';
import { ScrollController } from './ScrollController';
import { Vector3 } from 'three';

export class CameraController {
    private static _instance: CameraController;
    camera: Camera;

    constructor() {
        this.camera = new Camera();
    }

    public static get Instance(): CameraController {
        return this._instance || (this._instance = new this());
    }

    animate(): void {
        this.camera.position.setX(ScrollController.Instance.getScrollRelative(0, -0.2));
        this.camera.position.setY(ScrollController.Instance.getScrollRelative(0, 1.7));
        this.camera.position.setZ(ScrollController.Instance.getScrollRelative(6, 0.6));
        this.camera.lookAt(
            new Vector3(
                ScrollController.Instance.getScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().x - 0.1
                ),
                ScrollController.Instance.getScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().y
                ),
                ScrollController.Instance.getScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().z
                )
            )
        );
    }
}
