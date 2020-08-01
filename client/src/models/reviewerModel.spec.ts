import { ReviewerModel, SolutionModel } from '.';
import { UserData } from '.';
import { RoleUserModelError, ItemsModelError } from '../errors';

describe('reviewerModel', () => {
    let reviewer: ReviewerModel;
    let solution: SolutionModel;
    let advisorData: UserData;

    beforeEach(() => {
        advisorData = {
            name: 'Reviewer Name',
            email: 'reviewer@host.com',
        };
        reviewer = new ReviewerModel(advisorData);
        solution = new SolutionModel();
        solution.id = SolutionModel.uniqId;
    });

    it('should set ERROR', () => {
        expect(reviewer.ERROR).toBe(RoleUserModelError);
    });

    describe('init with role', () => {
        it('should accept valid role', () => {
            advisorData.role = ReviewerModel.ROLE.Reviewer;
            reviewer = new ReviewerModel(advisorData);
            expect(reviewer.role).toBe(ReviewerModel.ROLE.Reviewer);
        });

        it('should change invalid role', () => {
            advisorData.role = ReviewerModel.ROLE.Asker;
            reviewer = new ReviewerModel(advisorData);
            expect(reviewer.role).toBe(ReviewerModel.ROLE.Reviewer);
        });
    });

    it('should have reviewer role', () => {
        expect(reviewer.role).toBe(ReviewerModel.ROLE.Reviewer);
    });

    it('should not change role', () => {
        const updateRole = () => (reviewer.role = ReviewerModel.ROLE.Asker);
        expect(updateRole).toThrowError(RoleUserModelError);
    });

    describe('with solution', () => {
        beforeEach(() => {
            reviewer.assignSolution(solution);
        });

        it('should assign new solution', () => {
            expect(reviewer.assignedSolutions.items).toContain(solution);
        });
        it('should not assign same solution', () => {
            const assign2 = () => reviewer.assignSolution(solution);
            expect(assign2).toThrowError(ItemsModelError);
        });
        it('should not have not assigned solution', () => {
            const newSolution = new SolutionModel();
            expect(reviewer.assignedSolutions.items).not.toContain(newSolution);
        });
        it('should review solution', () => {
            reviewer.reviewSolution(solution);
            expect(reviewer.assignedSolutions.items).not.toContain(solution);
            expect(reviewer.reviewedSolutions.items).toContain(solution);
        });
        it('should not review solution', () => {
            const unknownSolution = new SolutionModel();
            unknownSolution.id = SolutionModel.uniqId;
            const review = () => reviewer.reviewSolution(unknownSolution);
            expect(review).toThrowError(ItemsModelError);
        });
    });
});
