import { ItemModel } from '.';
import { QuestionStore } from '../stores';
import { observable } from 'mobx';
import { QuestionModelError } from '../errors';

export class QuestionModel extends ItemModel {
    @observable private query_: string;

    ERROR = QuestionModelError;

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
