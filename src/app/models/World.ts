import * as THREE from 'three';
import { Group } from 'three';

export class World extends THREE.Scene {
    constructor() {
        super();
        this.addBackground();
        this.addFog();
        this.addLights();
        this.addFloor();
    }

    addBackground(): void {
        this.background = new THREE.Color(0x3c3c3c);
    }

    addFog(): void {
        this.fog = new THREE.Fog(0x3c3c3c, 10, 20);
    }

    addLights(): void {
        const hemiLightTop = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLightTop.position.set(0, 20, 0);
        this.add(hemiLightTop);

        const dirLightTop = new THREE.DirectionalLight(0xffffff);
        dirLightTop.position.set(-3, 10, 5);
        this.add(dirLightTop);
        const dirLightFront = new THREE.DirectionalLight(0xffffff);
        dirLightFront.position.set(3, 3, 3);
        this.add(dirLightFront);
    }

    addFloor(): void {
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshPhongMaterial({ color: 0x000000 })
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = -2.5;
        this.add(mesh);
    }

    addObject3D(object3D: Group): void {
        this.add(object3D);
    }
}
