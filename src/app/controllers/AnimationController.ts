import * as THREE from 'three';
import { sceneController } from '../app';
import { ScrollController } from './ScrollController';

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
        sceneController.itachi.itachiUchihaMixer.update(delta);
        if (ScrollController.Instance.isBottom()) {
            sceneController.itachi.amaterasu();
        }
    }
}
