import { RootStore, StoreCore } from '.';
import { AnswerModel } from '../models';
import { AnswerStoreError } from '../errors';

export class AnswerStore extends StoreCore {
    ERROR = AnswerStoreError;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    set answers(answers: AnswerModel[]) {
        this.items = answers;
    }

    get answers() {
        return <AnswerModel[]>this.items;
    }
}
