import { RootStore, StoreCore } from '.';
import { observable, action } from 'mobx';
import { AnswerModel } from '../models';

export class AnswerStore extends StoreCore {
    rootStore: RootStore;
    @observable answers: AnswerModel[] = [];

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    @action
    addAnswer(answer: AnswerModel) {
        this.answers.push(answer);
    }
}
