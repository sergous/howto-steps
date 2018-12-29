import { StepModel, CommonModel } from '.';

export class AnswerModel extends CommonModel {
    private steps_: StepModel[] = [];

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
