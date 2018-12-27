import { QuestionModel } from '.';
import { UserModel } from '.';
import { UserData } from '.';

export class AdviserModel extends UserModel {
    private questions_: QuestionModel[] = [];

    constructor(userData: UserData) {
        super(userData);
        this.role = AdviserModel.ROLE.Adviser;
    }

    answer(question: QuestionModel) {
        this.questions_.push(question);
    }

    get questions() {
        return this.questions_;
    }
}
