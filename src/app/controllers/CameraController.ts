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
        if (ScrollController.Instance.scrollPercentage < 50)
            CameraController.Instance.lookAtItachi();
    }

    lookAtItachi(): void {
        CameraController.Instance.camera.position.setX(
            ScrollController.Instance.getPartialScrollRelative(0, -0.2, 50)
        );
        CameraController.Instance.camera.position.setY(
            ScrollController.Instance.getPartialScrollRelative(0, 1.7, 50)
        );
        CameraController.Instance.camera.position.setZ(
            ScrollController.Instance.getPartialScrollRelative(6, 0.6, 50)
        );
        CameraController.Instance.camera.lookAt(
            new Vector3(
                ScrollController.Instance.getPartialScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().x - 0.1,
                    50
                ),
                ScrollController.Instance.getPartialScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().y,
                    50
                ),
                ScrollController.Instance.getPartialScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().z,
                    50
                )
            )
        );
    }
}
