import { StoreCore } from '.';
import { QuestionModel } from '../models';
import { QuestionStoreError } from '../errors';

export class QuestionStore extends StoreCore {
    ERROR = QuestionStoreError;

    set questions(questions: QuestionModel[]) {
        this.items = questions;
    }

    get questions(): QuestionModel[] {
        return <QuestionModel[]>this.items;
    }
}
