import { AnswerModel } from '.';

export class QuestionModel {
    private query_: string;
    private answers_: AnswerModel[] = [];

    constructor(query: string) {
        this.query_ = query;
    }

    addAnswer(answer: AnswerModel) {
        this.answers_.push(answer);
    }

    set answers(answers: AnswerModel[]) {
        this.answers_ = answers;
    }

    get answers() {
        return this.answers_;
    }

    set query(query: string) {
        this.query_ = query;
    }

    get query() {
        return this.query_;
    }
}
