import { QuestionModel, AnswerModel, CommonModel } from '.';
import { SolutionStore } from '../stores';
import { observable, action } from 'mobx';
import { SolutionModelError } from '../errors';

export class SolutionModel extends CommonModel {
    @observable private question_?: QuestionModel;
    @observable private answers_: AnswerModel[] = [];

    ERROR = SolutionModelError;

    set question(question: QuestionModel | undefined) {
        this.question_ = question;
    }

    get question() {
        return this.question_;
    }

    set answers(answers: AnswerModel[]) {
        this.answers_ = answers;
    }

    get answers(): AnswerModel[] {
        return this.answers_;
    }

    @action
    addAnswer(answer: AnswerModel) {
        this.answers_.push(answer);
    }

    @action
    removeAnswer(answer: AnswerModel) {
        this.answers_ = this.answers_.filter(
            a => !!answer.id && a.id !== answer.id,
        );
    }
}
