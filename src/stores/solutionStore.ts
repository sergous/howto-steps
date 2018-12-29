import { RootStore, StoreBase } from '.';
import { observable, action } from 'mobx';
import { SolutionModel } from '../models';
import { SolutionStoreError } from '../errors';

export class SolutionStore extends StoreBase {
    rootStore: RootStore;
    @observable solutions: SolutionModel[] = [];

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    @action
    createSolution(
        solution: SolutionModel = new SolutionModel(this),
    ): SolutionModel {
        solution.id = this.newId;
        this.addSolution(solution);
        return solution;
    }

    @action
    addSolution(solution: SolutionModel) {
        const s = this.findOne(solution);

        if (s) {
            throw new SolutionStoreError('Solution already exists');
        } else {
            this.solutions.push(solution);
        }
    }

    @action
    updateSolution(solution: SolutionModel) {
        let s = this.findOne(solution);
        if (!s) return;
        Object.assign(s, solution);
        return s;
    }

    findOne(solution: SolutionModel): SolutionModel | undefined {
        return this.solutions.find(s => !!solution.id && s.id === solution.id);
    }
}
