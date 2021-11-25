import * as THREE from 'three';
import { cloneModel } from '../shared/SkeletonUtils';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { getRandomArbitrary } from '../shared/Math';
import { remove } from 'lodash-es';
import { sceneController } from '../app';

export class Crows {
    crowsLeft: THREE.Group[] = [];
    crowsRight: THREE.Group[] = [];
    crowAnimation!: THREE.AnimationClip;
    crowMixers: THREE.AnimationMixer[] = [];
    crowActions: THREE.AnimationAction[] = [];

    constructor(gltfLoader: GLTFLoader) {
        gltfLoader.load('./assets/3dmodels/crow.gltf', (crowGltf) => {
            this.crowAnimation = crowGltf.animations[0];
            const crowsVerticalViewLimit = (window.innerHeight * 8) / 970;
            for (let i = 0; i < 20; i++) {
                const cloneGltfClone = cloneModel(crowGltf.scene);

                // Set position
                let randomXPosition = getRandomArbitrary(-15, 15);
                let randomYPosition = getRandomArbitrary(0, crowsVerticalViewLimit);
                let randomZPosition = getRandomArbitrary(-10, -5);
                cloneGltfClone.position.set(randomXPosition, randomYPosition, randomZPosition);

                // Scale
                cloneGltfClone.scale.multiplyScalar(getRandomArbitrary(0.075, 0.125));

                // Half of the birds are rotated in the opposite direction
                if (i % 2 == 0) {
                    cloneGltfClone.rotateY(getRandomArbitrary(-0.5, 0.5));
                    this.crowsLeft.push(cloneGltfClone);
                } else {
                    cloneGltfClone.rotateY(getRandomArbitrary(2.5, 3.5));
                    this.crowsRight.push(cloneGltfClone);
                }

                // Animation
                let mixer = new THREE.AnimationMixer(cloneGltfClone);
                this.crowMixers.push(mixer);
                let action = mixer.clipAction(this.crowAnimation).play();
                this.crowActions.push(action);

                sceneController.world.addObject3D(cloneGltfClone);
            }
        });
    }

    moveCrows() {
        const crowsHorizontalViewLimit = (window.innerWidth * 16) / 1920;
        this.crowsLeft.forEach((crow) => {
            if (crow.position.x > crowsHorizontalViewLimit) {
                crow.rotateY(Math.PI);
                this.crowsRight.push(crow);
                remove(this.crowsLeft, crow);
            }
            const targetPosition = crow.position.clone();
            targetPosition.x += 0.1;
            // If rotation.y > 0 the crow is facing the horizon
            crow.rotation.y > 0 ? (targetPosition.z -= 0.05) : (targetPosition.z += 0.05);
            crow.position.lerp(targetPosition, 0.1);
        });
        this.crowsRight.forEach((crow) => {
            if (crow.position.x < -crowsHorizontalViewLimit) {
                crow.rotateY(Math.PI);
                this.crowsLeft.push(crow);
                remove(this.crowsRight, crow);
            }
            const targetPosition = crow.position.clone();
            targetPosition.x -= 0.1;
            // If rotation.y > 0 the crow is facing the horizon
            crow.rotation.y > 0 ? (targetPosition.z -= 0.05) : (targetPosition.z += 0.05);
            crow.position.lerp(targetPosition, 0.1);
        });
    }
}
