import { AnimationAction, AnimationClip, AnimationMixer, Group, LoopOnce, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { sceneController } from '../app';

export class ItachiUchiha {
    itachiUchihaScene!: Group;
    itachiUchihaAnimation!: AnimationClip;
    itachiUchihaMixer!: AnimationMixer;
    itachiUchihaAction!: AnimationAction;
    usedAmaterasu: boolean = false;

    constructor(gltfLoader: GLTFLoader) {
        gltfLoader.load('./assets/3dmodels/itachi_uchiha_v9.gltf', (itachiGltf) => {
            this.itachiUchihaAnimation = itachiGltf.animations[0];
            this.itachiUchihaScene = itachiGltf.scene;
            // Animation
            this.itachiUchihaMixer = new AnimationMixer(this.itachiUchihaScene);
            this.itachiUchihaAction = this.itachiUchihaMixer.clipAction(this.itachiUchihaAnimation);
            this.itachiUchihaAction.loop = LoopOnce;
            this.itachiUchihaAction.clampWhenFinished = true;
            this.itachiUchihaAction.enabled = true;
            sceneController.world.addObject3D(this.itachiUchihaScene);
        });
    }

    getFacePosition(): Vector3 {
        return new Vector3(0, 1.9, 0);
    }

    amaterasu() {
        if (this.usedAmaterasu) return;
        this.usedAmaterasu = true;
        this.itachiUchihaAction.play();
    }
}
