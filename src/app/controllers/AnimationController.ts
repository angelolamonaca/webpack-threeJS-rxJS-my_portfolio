import { sceneController } from '../app';
import { ScrollController } from './ScrollController';
import { Clock } from 'three';

export class AnimationController {
    private static _instance: AnimationController;
    clock = new Clock();

    public static get Instance(): AnimationController {
        return this._instance || (this._instance = new this());
    }

    animate(): void {
        const delta = AnimationController.Instance.clock.getDelta();
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
