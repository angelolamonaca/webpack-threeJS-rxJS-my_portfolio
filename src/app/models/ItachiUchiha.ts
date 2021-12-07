import * as THREE from 'three';
import { AnimationClip, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { sceneController } from '../app';

export class ItachiUchiha {
    itachiUchihaScene!: THREE.Group;
    itachiUchihaAnimation!: AnimationClip;
    itachiUchihaMixer!: THREE.AnimationMixer;
    itachiUchihaAction!: THREE.AnimationAction;
    usedAmaterasu: boolean = false;

    constructor(gltfLoader: GLTFLoader) {
        gltfLoader.load('./assets/3dmodels/itachi_uchiha_v9.gltf', (itachiGltf) => {
            this.itachiUchihaAnimation = itachiGltf.animations[0];
            this.itachiUchihaScene = itachiGltf.scene;
            // Animation
            this.itachiUchihaMixer = new THREE.AnimationMixer(this.itachiUchihaScene);
            this.itachiUchihaAction = this.itachiUchihaMixer.clipAction(this.itachiUchihaAnimation);
            this.itachiUchihaAction.loop = THREE.LoopOnce;
            this.itachiUchihaAction.clampWhenFinished = true;
            this.itachiUchihaAction.enabled = true;
            sceneController.world.addObject3D(this.itachiUchihaScene);
        });
    }

    getFacePosition(): THREE.Vector3 {
        return new Vector3(0, 1.9, 0);
    }

    amaterasu() {
        if (this.usedAmaterasu) return;
        this.usedAmaterasu = true;
        this.itachiUchihaAction.play();
    }
}
