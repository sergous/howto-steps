import { RoleUserModel, QuestionModel, ItemsModel } from '.';
import { SolutionModel } from './solutionModel';

export class AskerModel extends RoleUserModel {
    questions = new ItemsModel();
    solutions = new ItemsModel();
    role = AskerModel.ROLE.Asker;

    askQuestion(question: QuestionModel) {
        this.questions.add(question);
    }

    acceptSolution(solution: SolutionModel) {
        const question = solution.question;
        this.questions.remove(question);
        this.solutions.add(solution);
    }
}
