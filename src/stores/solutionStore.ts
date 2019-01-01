import { RootStore, StoreCore } from '.';
import { observable, action } from 'mobx';
import { SolutionModel } from '../models';
import { SolutionStoreError } from '../errors';

export class SolutionStore extends StoreCore {
    ERROR = SolutionStoreError;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    set solutions(solutions: SolutionModel[]) {
        this.items = solutions;
    }

    get solutions() {
        return <SolutionModel[]>this.items;
    }
}
