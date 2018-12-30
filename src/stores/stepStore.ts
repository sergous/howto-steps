import { RootStore, StoreCore } from '.';
import { observable, action } from 'mobx';
import { StepModel } from '../models';

export class StepStore extends StoreCore {
    rootStore: RootStore;
    @observable steps: StepModel[] = [];

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    @action
    addStep(step: StepModel) {
        this.steps.push(step);
    }
}
