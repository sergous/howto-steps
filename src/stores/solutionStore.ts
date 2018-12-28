import { RootStore } from '.';
import { observable, action } from 'mobx';
import { QuestionModel } from '../models';

export class SolutionStore {
    rootStore: RootStore;
    @observable questions: QuestionModel[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    addQuestion(question: QuestionModel) {
        this.questions.push(question);
    }
}
