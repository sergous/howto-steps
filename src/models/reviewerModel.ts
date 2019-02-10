import { SolutionModel, ItemsModel } from '.';
import { RoleUserModel } from '.';
import { action } from 'mobx';

export class ReviewerModel extends RoleUserModel {
    assignedSolutions = new ItemsModel();
    reviewedSolutions = new ItemsModel();
    role = ReviewerModel.ROLE.Reviewer;

    @action
    assignSolution(solution: SolutionModel) {
        this.assignedSolutions.add(solution);
    }

    @action
    reviewSolution(solution: SolutionModel) {
        this.assignedSolutions.remove(solution);
        this.reviewedSolutions.add(solution);
    }
}
