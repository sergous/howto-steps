import { QuestionModel, ItemsModel, SolutionModel } from '.';
import { RoleUserModel } from '.';
import { action } from 'mobx';

export class AdviserModel extends RoleUserModel {
    questions = new ItemsModel();
    solutions = new ItemsModel();
    role = AdviserModel.ROLE.Adviser;

    @action
    assignQuestion(question: QuestionModel) {
        this.questions.add(question);
    }

    @action
    adviseSolution(solution: SolutionModel) {
        const question = solution.question;
        this.questions.remove(question);
        this.solutions.add(solution);
    }
}
