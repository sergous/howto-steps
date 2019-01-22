import { ItemModel, QuestionModel, ItemsModel } from '.';
import { observable } from 'mobx';
import { QuestionRequestStore } from '../stores';

export class QuestionRequestModel extends ItemModel {
    @observable private question_?: QuestionModel;

    tags = new ItemsModel();

    constructor(question?: QuestionModel, store?: QuestionRequestStore) {
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
