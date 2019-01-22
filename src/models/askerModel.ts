import { RoleUserModel, QuestionModel, ItemsModel } from '.';
import { SolutionModel } from './solutionModel';

export class AskerModel extends RoleUserModel {
    questions = new ItemsModel();
    solutions = new ItemsModel();
    role = AskerModel.ROLE.Asker;

    ask(question: QuestionModel) {
        if (this.questions.findOne(question))
            throw new this.ERROR('question already exists');
        this.questions.add(question);
    }

    resolve(solution: SolutionModel) {
        const question = solution.question;
        if (!question || !this.questions.findOne(question))
            throw new this.ERROR('question not found');
        this.questions.remove(question);
        this.solutions.add(solution);
    }
}
