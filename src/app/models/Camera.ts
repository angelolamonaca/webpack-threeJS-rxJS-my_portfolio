import { PerspectiveCamera } from 'three';

export class Camera extends PerspectiveCamera {
    constructor() {
        super(45, window.innerWidth / window.innerHeight, 0.001, 20);
        this.position.setZ(6);
    }
}
