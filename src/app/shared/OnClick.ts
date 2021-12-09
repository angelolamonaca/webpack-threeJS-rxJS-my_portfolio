import { delay } from './Utils';

export async function delayedRedirect(destination: string, delayInMs: number) {
    await delay(delayInMs);
    window.open(destination, '_blank')!.focus();
}
