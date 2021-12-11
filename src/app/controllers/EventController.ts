import { renderer } from '../app';
import { fromEvent, Observable, tap } from 'rxjs';
import { delayedRedirect } from '../shared/OnClick';
import { ScrollController } from './ScrollController';

export class EventController {
    previosWindowInnerWidth: number;
    resizeEvents$: Observable<Event> = fromEvent(window, 'resize').pipe(
        tap(() => this.onWindowResize()),
        tap((event) => console.log(event))
    );

    constructor() {
        this.previosWindowInnerWidth = window.innerWidth;
        this.resizeEvents$.subscribe();

        let touchEvent = 'onclick' in window ? 'click' : 'touchstart';
        fromEvent(document.getElementById('discord_logo_img')!, touchEvent).subscribe(async () => {
            await this.onClick('https://discordapp.com/users/568776197681709087');
        });
        fromEvent(document.getElementById('github_logo_img')!, touchEvent).subscribe(async () => {
            await this.onClick('https://github.com/angelolamonaca');
        });
        fromEvent(document.getElementById('linkedin_logo_img')!, touchEvent).subscribe(async () => {
            await this.onClick('https://www.linkedin.com/in/angelolamonaca/');
        });

        window.onscroll = ScrollController.Instance.detectScrollPercentage;
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };
    }

    async onClick(destination: string): Promise<void> {
        await delayedRedirect(destination, 1000);
    }

    onWindowResize(): void {
        if (window.innerWidth != this.previosWindowInnerWidth) {
            this.previosWindowInnerWidth = window.innerWidth;
            renderer.update();
        }
    }
}
