import { CommonModel, TagModel, QuestionModel, ItemsModel } from '.';
import { observable, action } from 'mobx';
import { QuestionRequestStore } from '../stores';

export class QuestionRequestModel extends CommonModel {
    @observable private question_?: QuestionModel;
    @observable private tags_: TagModel[] = [];

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

    set tags(tags: TagModel[]) {
        this.tags_ = tags;
    }

    get tags(): TagModel[] {
        return this.tags_;
    }
    
    @action
    addTag(tag: TagModel) {
        this.tags_.push(tag);
    }

    @action
    removeTag(tag: TagModel) {
        this.tags_ = ItemsModel.remove(this.tags_)(tag);
    }
}
