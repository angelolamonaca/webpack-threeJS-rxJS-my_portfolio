import { render, renderer } from '../app';
import { CameraController } from './CameraController';
import { fromEvent, Observable, tap } from 'rxjs';

export class EventController {
    resizeEvents$: Observable<Event> = fromEvent(window, 'resize').pipe(
        tap(() => this.onWindowResize()),
        tap((event) => console.log(event))
    );

    constructor() {
        this.resizeEvents$.subscribe();
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };
    }

    onWindowResize(): void {
        CameraController.Instance.camera.aspect = window.innerWidth / window.innerHeight;
        CameraController.Instance.camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }
}
