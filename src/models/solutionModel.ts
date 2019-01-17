import { QuestionModel, AnswerModel, CommonModel, ItemsModel } from '.';
import { observable, action } from 'mobx';
import { SolutionModelError } from '../errors';

export class SolutionModel extends CommonModel {
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
