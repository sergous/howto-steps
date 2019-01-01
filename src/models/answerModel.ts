import { StepModel, CommonModel } from '.';
import { AnswerStore } from '../stores';
import { action, observable } from 'mobx';

export class AnswerModel extends CommonModel {
    @observable private steps_: StepModel[] = [];
    private store_: AnswerStore;

    constructor(stepStore: AnswerStore) {
        super();
        this.store_ = stepStore;
        this.bindToStore();
    }

    @action
    private bindToStore() {
        Object.assign(this, this.store_.create(this));
    }

    set steps(steps: StepModel[]) {
        this.steps_ = steps;
    }

    get steps() {
        return this.steps_;
    }

    @action
    addStep(step: StepModel) {
        this.steps_.push(step);
    }

    @action
    removeStep(step: StepModel) {
        this.steps_ = this.steps_.filter(a => !!step.id && a.id !== step.id);
    }
}
