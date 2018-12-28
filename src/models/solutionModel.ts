import { QuestionModel } from './questionModel';
import { AnswerModel } from './answerModel';

export class SolutionModel {
    private question_: QuestionModel;
    private answers_: AnswerModel[] = [];

    constructor(question: QuestionModel) {
        this.question_ = question;
    }

    addAnswer(answer: AnswerModel) {
        this.answers_.push(answer);
    }

    set question(question: QuestionModel) {
        this.question_ = question;
    }

    get question(): QuestionModel {
        return this.question_;
    }

    get answers(): AnswerModel[] {
        return this.answers_;
    }
}
