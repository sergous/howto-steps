import { UiStore } from './uiStore';

export class RootStore {
    uiStore: UiStore;
    constructor() {
        this.uiStore = new UiStore(this);
    }
}
