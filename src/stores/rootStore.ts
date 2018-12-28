import { UiStore } from '.';

export class RootStore {
    uiStore: UiStore;
    constructor() {
        this.uiStore = new UiStore(this);
    }
}
