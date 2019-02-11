import { QuestionModel, ItemModel, ItemsModel, StatusModel } from '.';
import { observable } from 'mobx';
import { SolutionModelError } from '../errors';

export class SolutionModel extends ItemModel {
    @observable private question_?: QuestionModel;
    @observable status = new StatusModel();
    answers = new ItemsModel();

    ERROR = SolutionModelError;

    set question(question: QuestionModel | undefined) {
        this.question_ = question;
    }

    get question() {
        return this.question_;
    }
}
