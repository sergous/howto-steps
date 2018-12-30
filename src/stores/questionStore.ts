import { RootStore, StoreCore } from '.';
import { observable, action } from 'mobx';
import { QuestionModel } from '../models';

export class QuestionStore extends StoreCore {
    rootStore: RootStore;
    @observable questions: QuestionModel[] = [];

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    @action
    addQuestion(question: QuestionModel) {
        this.questions.push(question);
    }
}
