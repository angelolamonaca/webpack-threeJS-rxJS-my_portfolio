import * as THREE from 'three';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { sceneController } from '../app';

export class ItachiUchiha {
    itachiUchihaScene!: THREE.Group;

    constructor(gltfLoader: GLTFLoader) {
        gltfLoader.load('./assets/3dmodels/itachi_uchiha_v9.gltf', (itachiGltf) => {
            this.itachiUchihaScene = itachiGltf.scene;
            sceneController.world.addObject3D(this.itachiUchihaScene);
        });
    }

    getFacePosition(): THREE.Vector3 {
        return new Vector3(0, 0.5, 0);
    }
}
