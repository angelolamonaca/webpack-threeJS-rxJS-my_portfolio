import { Camera } from '../models/Camera';
import { sceneController } from '../app';
import { ScrollController } from './ScrollController';
import { Vector3 } from 'three';

export class CameraController {
    private static _instance: CameraController;
    camera: Camera;
    itachiEndScrollPercentage = 100;

    constructor() {
        this.camera = new Camera();
    }

    public static get Instance(): CameraController {
        return this._instance || (this._instance = new this());
    }

    animate(): void {
        if (ScrollController.Instance.scrollPercentage < this.itachiEndScrollPercentage)
            CameraController.Instance.lookAtItachi(this.itachiEndScrollPercentage);
    }

    lookAtItachi(itachiEndScrollPercentage: number): void {
        CameraController.Instance.camera.position.setX(
            ScrollController.Instance.getPartialScrollRelative(0, -0.2, itachiEndScrollPercentage)
        );
        console.log(
            ScrollController.Instance.getPartialScrollRelative(0, 1.7, itachiEndScrollPercentage)
        );
        CameraController.Instance.camera.position.setY(
            ScrollController.Instance.getPartialScrollRelative(0, 1.7, itachiEndScrollPercentage)
        );
        CameraController.Instance.camera.position.setZ(
            ScrollController.Instance.getPartialScrollRelative(6, 0.6, itachiEndScrollPercentage)
        );
        CameraController.Instance.camera.lookAt(
            new Vector3(
                ScrollController.Instance.getPartialScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().x - 0.1,
                    itachiEndScrollPercentage
                ),
                ScrollController.Instance.getPartialScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().y,
                    itachiEndScrollPercentage
                ),
                ScrollController.Instance.getPartialScrollRelative(
                    0,
                    sceneController.itachi.getFacePosition().z,
                    itachiEndScrollPercentage
                )
            )
        );
    }
}
