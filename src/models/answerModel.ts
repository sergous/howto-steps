import { StepModel, CommonModel, TagModel } from '.';
import { action, observable } from 'mobx';
import { AnswerModelError } from '../errors';

export class AnswerModel extends CommonModel {
    @observable private steps_: StepModel[] = [];
    @observable private tags_: TagModel[] = [];
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
        this.steps_ = StepModel.remove(this.steps_)(step);
    }

    set tags(tags: TagModel[]) {
        this.tags_ = tags;
    }

    get tags(): TagModel[] {
        return this.tags_;
    }

    @action
    addTag(tag: TagModel) {
        this.tags_.push(tag);
    }

    @action
    removeTag(tag: TagModel) {
        this.tags_ = TagModel.remove(this.tags_)(tag);
    }
}
