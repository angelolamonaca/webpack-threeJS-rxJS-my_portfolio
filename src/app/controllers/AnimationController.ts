import * as THREE from 'three';
import { sceneController } from '../app';

export class AnimationController {
    private static _instance: AnimationController;
    clock = new THREE.Clock();

    public static get Instance(): AnimationController {
        return this._instance || (this._instance = new this());
    }

    animate(): void {
        const delta = this.clock.getDelta();
        sceneController.crows.crowMixers.forEach((mixer) => {
            mixer.update(delta);
        });
        sceneController.crows.moveCrows();
    }
}
