import { StoreCore } from '.';
import { QuestionModel } from '../models';

export class QuestionStore extends StoreCore {
    set questions(questions: QuestionModel[]) {
        this.items = questions;
    }

    get questions(): QuestionModel[] {
        return <QuestionModel[]>this.items;
    }
}
