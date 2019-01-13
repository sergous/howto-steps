import { StoreCore, RootStore } from '.';

export class TagStore extends StoreCore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }
}
