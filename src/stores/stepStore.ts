import { RootStore } from '.';
import { observable, action } from 'mobx';
import { StepModel } from '../models';

export class StepStore {
    rootStore: RootStore;
    @observable steps: StepModel[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    addStep(step: StepModel) {
        this.steps.push(step);
    }
}
