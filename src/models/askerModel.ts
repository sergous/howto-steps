import { RoleUserModel, QuestionModel } from '.';
import { observable, action } from 'mobx';
import { AskerModelError } from '../errors';
import { SolutionModel } from './solutionModel';

export class AskerModel extends RoleUserModel {
    @observable private questions_: QuestionModel[] = [];
    role = AskerModel.ROLE.Asker;

    ERROR = AskerModelError;

    set questions(questions: QuestionModel[]) {
        this.questions_ = questions;
    }

    get questions() {
        return this.questions_;
    }

    // TODO(sergous): Make solution extends question, then refactor this
    ask(question: QuestionModel) {
        if (this.findQuestion(question))
            throw new this.ERROR('question already exists');
        this.addQuestion_(question);
    }

    resolve(solution: SolutionModel) {
        const question = solution.question;
        if (!question || !this.findQuestion(question))
            throw new this.ERROR('question not found');
        this.removeQuestion_(question);
    }

    findQuestion(question: QuestionModel) {
        return this.questions_.find(q => !!question.id && q.id === question.id);
    }

    @action
    private addQuestion_(question: QuestionModel) {
        this.questions_.push(question);
    }

    @action
    private removeQuestion_(question: QuestionModel) {
        this.questions_ = this.questions_.filter(
            q => !!question.id && q.id !== question.id,
        );
    }
}
