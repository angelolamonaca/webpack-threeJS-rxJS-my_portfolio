import { delay } from './Utils';

export async function delayedRedirect(destination: string, delayInMs: number) {
    await delay(delayInMs);
    const openedWindow = window.open(destination, '_blank');
    if (openedWindow) openedWindow.focus();
    else window.location.href = destination;
}
