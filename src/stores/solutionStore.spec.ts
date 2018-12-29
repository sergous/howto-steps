import { RootStore, SolutionStore } from '.';
import { SolutionModel, QuestionModel } from '../models';
import { SolutionStoreError } from '../errors';

describe('solution store', () => {
    let rootStore: RootStore;
    let solutionStore: SolutionStore;
    let solution: SolutionModel;

    beforeEach(() => {
        rootStore = new RootStore();
        solutionStore = new SolutionStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(solutionStore).toHaveProperty('rootStore');
        expect(solutionStore.rootStore).toBeDefined();
        expect(solutionStore.rootStore).toBeInstanceOf(RootStore);
    });

    describe('with solution', () => {
        beforeEach(() => {
            solution = solutionStore.createSolution();
        });

        it('should have solution', () => {
            expect(solutionStore.solutions).toContain(solution);
        });

        it('should find solution', () => {
            expect(solutionStore.findOne(solution)).toBe(solution);
        });

        it('should not add same solution', () => {
            expect(() => solutionStore.addSolution(solution)).toThrowError(
                SolutionStoreError,
            );
        });

        it('should update solution', () => {
            const question = new QuestionModel();
            solution.question = question;
            const s = solutionStore.updateSolution(solution);
            expect(s).toBeDefined();
            expect(s!.question).toEqual(question);
        });
    });
});
