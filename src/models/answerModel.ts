import { StepModel, CommonModel } from '.';
import { AnswerStore } from '../stores';
import { action, observable } from 'mobx';
import { AnswerModelError } from '../errors';

export class AnswerModel extends CommonModel {
    @observable private steps_: StepModel[] = [];
    ERROR = AnswerModelError;

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
