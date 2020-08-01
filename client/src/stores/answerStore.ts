import { StoreCore } from '.';
import { AnswerModel } from '../models';
import { AnswerStoreError } from '../errors';

export class AnswerStore extends StoreCore {
    ERROR = AnswerStoreError;

    set answers(answers: AnswerModel[]) {
        this.items = answers;
    }

    get answers(): AnswerModel[] {
        return <AnswerModel[]>this.items;
    }
}
