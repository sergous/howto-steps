import { QuestionModel, AnswerModel, CommonModel } from '.';
import { SolutionStore } from '../stores';
import { observable, action } from 'mobx';

export class SolutionModel extends CommonModel {
    @observable private question_?: QuestionModel;
    @observable private answers_: AnswerModel[] = [];
    private store_: SolutionStore;

    constructor(solutionStore: SolutionStore) {
        super();
        this.store_ = solutionStore;
        this.bindToStore();
    }

    @action
    private bindToStore() {
        Object.assign(this, this.store_.createSolution(this));
    }

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
