import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { sceneController } from '../app';
import { Group } from 'three';

export class Octocat {
    octocatScene!: Group;

    constructor(gltfLoader: GLTFLoader) {
        gltfLoader.load('assets/asset/3dmodels/octocat.gltf', (octocat) => {
            this.octocatScene = octocat.scene;
            const octocatPositionX = (window.innerWidth * 4) / 1920;
            const octocatPositionY = (window.innerHeight * 2) / 1080;
            this.octocatScene.position.set(octocatPositionX, octocatPositionY, 0);
            this.octocatScene.rotateX(0.35);
            // octocatScene.rotateY(3);
            this.octocatScene.rotateY(-0.2);
            this.octocatScene.scale.multiplyScalar(0.1);
            sceneController.world.addObject3D(this.octocatScene);
        });
    }
}
