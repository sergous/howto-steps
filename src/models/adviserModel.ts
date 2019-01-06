import { QuestionModel } from '.';
import { RoleUserModel } from '.';
import { observable, action } from 'mobx';

export class AdviserModel extends RoleUserModel {
    @observable private questions_: QuestionModel[] = [];
    role = AdviserModel.ROLE.Adviser;

    @action
    answer(question: QuestionModel) {
        this.questions_.push(question);
    }

    get questions() {
        return this.questions_;
    }
}
