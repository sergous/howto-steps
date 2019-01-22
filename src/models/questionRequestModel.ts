import { ItemModel, QuestionModel, ItemsModel } from '.';
import { observable } from 'mobx';
import { RequestStore } from '../stores';

export class QuestionRequestModel extends ItemModel {
    @observable private question_?: QuestionModel;

    tags = new ItemsModel();

    constructor(question?: QuestionModel, store?: RequestStore) {
        super(store);
        this.question_ = question;
    }

    set question(question: QuestionModel | undefined) {
        this.question_ = question;
    }

    get question(): QuestionModel | undefined {
        return this.question_;
    }
}
