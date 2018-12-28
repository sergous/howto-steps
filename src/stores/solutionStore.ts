import { RootStore } from '.';
import { observable, action } from 'mobx';
import { SolutionModel } from '../models';

export class SolutionStore {
    rootStore: RootStore;
    @observable solutions: SolutionModel[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    addSolution(solution: SolutionModel) {
        this.solutions.push(solution);
    }
}
