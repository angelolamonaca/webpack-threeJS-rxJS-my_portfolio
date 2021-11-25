import { Renderer } from './views/Renderer';
import { SceneController } from './controllers/SceneController';
import { AnimationController } from './controllers/AnimationController';
import { CameraController } from './controllers/CameraController';
import { EventController } from './controllers/EventController';

export const sceneController = new SceneController();
export const eventController = new EventController();
export const renderer = new Renderer();
document.body.appendChild(renderer.domElement);

export function animate(): void {
    requestAnimationFrame(animate);
    AnimationController.Instance.animate();
    render();
}

export function render(): void {
    renderer.render(sceneController.world, CameraController.Instance.camera);
}
