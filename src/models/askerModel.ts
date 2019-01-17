import { RoleUserModel, QuestionModel, ItemsModel } from '.';
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

    findQuestion = (question: QuestionModel) =>
        ItemsModel.findOne(this.questions_)(question);

    findSolution = (solution: SolutionModel) =>
        ItemsModel.findOne(this.solutions_)(solution);

    @action
    removeSolution(solution: SolutionModel) {
        if (!solution || !this.findSolution(solution))
            throw new this.ERROR('solution not found');
        this.solutions_ = ItemsModel.remove(this.solutions_)(solution);
    }

    @action
    removeQuestion(question: QuestionModel) {
        if (!question || !this.findQuestion(question))
            throw new this.ERROR('question not found');
        this.questions_ = ItemsModel.remove(this.questions_)(question);
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
