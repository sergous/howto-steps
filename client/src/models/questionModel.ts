import Parse from 'parse';
import { observable } from 'mobx';
import { QuestionModelError } from '../errors';

class QuestionAttributes {
    @observable query: string = '';
}

export class QuestionModel extends Parse.Object {
    @observable attributes = new QuestionAttributes();

    static ERROR = QuestionModelError;
}
