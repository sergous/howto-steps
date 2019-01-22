import { QuestionModel, ItemModel, ItemsModel } from '.';
import { observable } from 'mobx';
import { SolutionModelError } from '../errors';

export class SolutionModel extends ItemModel {
    @observable private question_?: QuestionModel;

    answers = new ItemsModel();

    ERROR = SolutionModelError;

    set question(question: QuestionModel | undefined) {
        this.question_ = question;
    }

    get question() {
        return this.question_;
    }
}
