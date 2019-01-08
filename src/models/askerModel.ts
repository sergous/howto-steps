import { RoleUserModel, QuestionModel } from '.';
import { observable, action } from 'mobx';
import { AskerModelError } from '../errors';
import { SolutionModel } from './solutionModel';
import { AnswerModel } from './answerModel';

export class AskerModel extends RoleUserModel {
    @observable private questions_: QuestionModel[] = [];
    @observable private solutions_: SolutionModel[] = [];
    role = AskerModel.ROLE.Asker;

    ERROR = AskerModelError;

    set questions(questions: QuestionModel[]) {
        this.questions_ = questions;
    }

    get questions() {
        return this.questions_;
    }

    set solutions(solutions: SolutionModel[]) {
        this.solutions_ = solutions;
    }

    get solutions() {
        return this.solutions_;
    }

    ask(question: QuestionModel) {
        if (this.findQuestion(question))
            throw new this.ERROR('question already exists');
        this.addQuestion_(question);
    }

    resolve(solution: SolutionModel) {
        const question = solution.question;
        if (!question || !this.findQuestion(question))
            throw new this.ERROR('question not found');
        this.removeQuestion(question);
        this.addSolution_(solution);
    }

    findQuestion(question: QuestionModel) {
        return this.questions_.find(q => !!question.id && q.id === question.id);
    }

    findSolution(solution: SolutionModel) {
        return this.solutions_.find(s => !!solution.id && s.id === solution.id);
    }

    @action
    removeSolution(solution: SolutionModel) {
        if (!solution || !this.findSolution(solution))
            throw new this.ERROR('solution not found');
        this.solutions_ = this.solutions_.filter(
            s => !!solution.id && s.id !== solution.id,
        );
    }

    @action
    removeQuestion(question: QuestionModel) {
        if (!question || !this.findQuestion(question))
            throw new this.ERROR('question not found');
        this.questions_ = this.questions_.filter(
            q => !!question.id && q.id !== question.id,
        );
    }

    @action
    private addSolution_(solution: SolutionModel) {
        this.solutions_.push(solution);
    }

    @action
    private addQuestion_(question: QuestionModel) {
        this.questions_.push(question);
    }
}
