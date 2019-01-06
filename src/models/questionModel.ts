import { CommonModel } from '.';
import { QuestionStore } from '../stores';
import { observable } from 'mobx';

export class QuestionModel extends CommonModel {
    @observable private query_: string;

    constructor(query: string = '', store?: QuestionStore) {
        super(store);
        this.query_ = query;
    }

    set query(query: string) {
        this.query_ = query;
    }

    get query() {
        return this.query_;
    }
}
