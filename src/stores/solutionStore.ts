import { RootStore, StoreBase } from '.';
import { observable, action } from 'mobx';
import { SolutionModel } from '../models';
import { SolutionStoreError } from '../errors';

export class SolutionStore extends StoreBase {
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

    @action
    createSolution(
        solution: SolutionModel = new SolutionModel(this),
    ): SolutionModel {
        solution.id = this.newId;
        this.add(solution);
        return solution;
    }
}
