import { ItachiUchiha } from '../models/ItachiUchiha';
import { Crows } from '../models/Crows';
import { LoadingController } from './LoadingController';
import { World } from '../models/World';

export class SceneController {
    world: World;
    itachi: ItachiUchiha;
    crows: Crows;

    constructor() {
        this.world = new World();
        this.itachi = new ItachiUchiha(LoadingController.Instance.gltfLoader);
        this.crows = new Crows(LoadingController.Instance.gltfLoader);
    }
}
