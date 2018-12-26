import { UserModel, UserData, QuestionModel } from '.';

export class AskerModel extends UserModel {
    private questions_: QuestionModel[] = [];

    constructor(askerData: UserData) {
        super(askerData);
        this.role_ = UserModel.ROLE.Asker;
    }

    ask(question: QuestionModel) {
        this.questions_.push(question);
    }

    get questions() {
        return this.questions_;
    }
}
