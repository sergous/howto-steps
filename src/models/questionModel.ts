import { AnswerModel } from '.';

export class QuestionModel {
    private query_: string;

    constructor(query: string = '') {
        this.query_ = query;
    }

    set query(query: string) {
        this.query_ = query;
    }

    get query() {
        return this.query_;
    }
}
