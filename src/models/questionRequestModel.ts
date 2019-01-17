import { CommonModel, TagModel, QuestionModel, ItemsModel } from '.';
import { observable, action } from 'mobx';
import { QuestionRequestStore } from '../stores';

export class QuestionRequestModel extends CommonModel {
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
