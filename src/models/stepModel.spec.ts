import { StepModel } from '.';
import { SolutionModel } from './solutionModel';

describe('stepModel', () => {
    let step: StepModel;
    let name: string;
    let description: string;

    beforeEach(() => {
        name = 'Prepare for give thing';
        description = 'Some info about thing preparation';
        step = new StepModel(name, description);
    });

    it('should have name', () => {
        expect(step.name).toBe(name);
    });

    it('should have description', () => {
        expect(step.description).toBe(description);
    });

    describe('solutions', () => {
        let solution: SolutionModel;
        beforeEach(() => {
            solution = new SolutionModel();
        });
        it('should add solution', () => {
            step.addSolution(solution);
            expect(step.solutions).toContain(solution);
        });
        it('should remove solution', () => {
            step.removeSolution(solution);
            expect(step.solutions).not.toContain(solution);
        });
    });
});
