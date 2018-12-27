import { StepModel } from '.';

export class AnswerModel {
    private steps_: StepModel[];

    constructor(...steps: StepModel[]) {
        this.steps_ = steps;
    }

    set steps(steps: StepModel[]) {
        this.steps_ = steps;
    }

    get steps() {
        return this.steps_;
    }

    addStep(step: StepModel) {
        this.steps_.push(step);
    }
}
