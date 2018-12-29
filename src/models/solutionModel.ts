import { QuestionModel, AnswerModel } from '.';
import { SolutionStore } from '../stores';
import { SolutionModelError } from '../errors';
import { observable } from 'mobx';

export class SolutionModel {
    @observable protected id_?: string;
    @observable private question_?: QuestionModel;
    private answers_: AnswerModel[] = [];
    private solutionStore_: SolutionStore;

    constructor(solutionStore: SolutionStore) {
        this.solutionStore_ = solutionStore;
    }

    set id(id: string) {
        if (this.id_) {
            throw new SolutionModelError(
                'Immutable solution id is already set',
            );
        }
        this.id_ = id;
    }

    get id() {
        if (!this.id_) {
            throw new SolutionModelError('Solution id has not set');
        }
        return this.id_;
    }

    set question(question: QuestionModel) {
        this.question_ = question;
        this.solutionStore_.updateSolution(this);
    }

    get question() {
        return this.question_ || new QuestionModel();
    }

    addAnswer(answer: AnswerModel) {
        this.answers_.push(answer);
    }

    get answers(): AnswerModel[] {
        return this.answers_;
    }
}
