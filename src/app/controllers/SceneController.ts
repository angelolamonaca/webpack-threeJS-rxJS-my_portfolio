import { ItachiUchiha } from '../models/ItachiUchiha';
import { Crows } from '../models/Crows';
import { CustomLoadingController } from './CustomLoadingController';
import { World } from '../models/World';

export class SceneController {
    world: World;
    itachi: ItachiUchiha;
    crows: Crows;

    constructor() {
        this.world = new World();
        this.itachi = new ItachiUchiha(CustomLoadingController.Instance.gltfLoader);
        this.crows = new Crows(CustomLoadingController.Instance.gltfLoader);
    }
}
