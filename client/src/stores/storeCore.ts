import { ItemsModel } from '../models';

import { StoreCoreError } from '../errors';
import { RootStore } from '.';

export class StoreCore extends ItemsModel {
    ERROR = StoreCoreError;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }
}
