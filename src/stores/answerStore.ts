import { RootStore } from '.';
import { observable, action } from 'mobx';
import { AnswerModel } from '../models';

export class AnswerStore {
    rootStore: RootStore;
    @observable answers: AnswerModel[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    addAnswer(answer: AnswerModel) {
        this.answers.push(answer);
    }
}
