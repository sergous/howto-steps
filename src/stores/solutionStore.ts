import { RootStore } from '.';
import { observable, action } from 'mobx';
import { SolutionModel } from '../models';
import { SolutionStoreError } from '../errors';

export class SolutionStore {
    rootStore: RootStore;
    @observable solutions: SolutionModel[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    createSolution(): SolutionModel {
        const solution = new SolutionModel(this);
        solution.id = this.newId;
        this.addSolution(solution);
        return solution;
    }

    private get newId() {
        return Date.now();
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

    findOne(solution: SolutionModel) {
        return this.solutions.find(s => !!s.id && s.id === solution.id);
    }
}
