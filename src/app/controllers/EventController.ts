import { render, renderer } from "../app";
import { CameraController } from "./CameraController";
import { fromEvent, merge, Observable, tap, throttleTime } from "rxjs";

export class EventController {
  wheelOrMoveEvents$: Observable<Event> = merge(
    fromEvent(window, "wheel"),
    fromEvent(window, "touchmove")
  ).pipe(
    throttleTime(1000),
    tap((event) => console.log(event))
  );

  resizeEvents$: Observable<Event> = fromEvent(window, "resize").pipe(
    tap(() => this.onWindowResize()),
    tap((event) => console.log(event))
  );

  constructor() {
    this.wheelOrMoveEvents$.subscribe();
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
