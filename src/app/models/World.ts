import * as THREE from 'three';
import { Group, Light } from 'three';

export class World extends THREE.Scene {
    constructor() {
        super();
        this.addBackground();
        this.addFog();
        this.addFloor();
    }

    addBackground(): void {
        this.background = new THREE.Color(0x3c3c3c);
    }

    addFog(): void {
        this.fog = new THREE.Fog(0x3c3c3c, 10, 20);
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

    addLight(light: Light): void {
        this.add(light);
    }
}
