import { QuestionModel } from './questionModel';
import { AnswerModel } from './answerModel';
import { SolutionStore } from '../stores';

export class SolutionModel {
    private question_?: QuestionModel;
    private answers_: AnswerModel[] = [];
    private solutionStore_: SolutionStore;

    constructor(solutionStore: SolutionStore) {
        this.solutionStore_ = solutionStore;
    }

    addAnswer(answer: AnswerModel) {
        this.answers_.push(answer);
    }

    set question(question: QuestionModel) {
        this.question_ = question;
    }

    get question() {
        return this.question_ || new QuestionModel();
    }

    get answers(): AnswerModel[] {
        return this.answers_;
    }
}
