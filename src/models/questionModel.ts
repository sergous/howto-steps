import { AnswerModel, CommonModel } from '.';

export class QuestionModel extends CommonModel {
    private query_: string;

    constructor(query: string = '') {
        super();
        this.query_ = query;
    }

    set query(query: string) {
        this.query_ = query;
    }

    get query() {
        return this.query_;
    }
}
