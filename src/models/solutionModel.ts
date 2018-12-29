import { QuestionModel, AnswerModel } from '.';
import { SolutionStore } from '../stores';
import { SolutionModelError } from '../errors';
import { observable, action } from 'mobx';

export class SolutionModel {
    @observable protected id_?: string;
    @observable private question_?: QuestionModel;
    @observable private answers_: AnswerModel[] = [];
    private store_: SolutionStore;

    constructor(solutionStore: SolutionStore) {
        this.store_ = solutionStore;
        this.bindToStore();
    }

    @action
    private bindToStore() {
        Object.assign(this, this.store_.createSolution(this));
    }

    set id(id: string | undefined) {
        if (this.id_) {
            throw new SolutionModelError(
                'Immutable solution id is already set',
            );
        }
        this.id_ = id;
    }

    get id() {
        return this.id_;
    }

    set question(question: QuestionModel | undefined) {
        this.question_ = question;
    }

    get question() {
        return this.question_;
    }

    addAnswer(answer: AnswerModel) {
        this.answers_.push(answer);
    }

    get answers(): AnswerModel[] {
        return this.answers_;
    }
}
