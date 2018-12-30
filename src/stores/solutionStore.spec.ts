import { RootStore, SolutionStore } from '.';
import { SolutionModel, QuestionModel } from '../models';
import { StoreBaseError } from '../errors';

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
            solution = new SolutionModel(solutionStore);
        });

        it('should have solution', () => {
            expect(solutionStore.solutions).toContain(solution);
        });

        it('should find solution', () => {
            expect(solutionStore.findOne(solution)).toBe(solution);
        });

        it('should not add same solution', () => {
            expect(() => solutionStore.addSolution(solution)).toThrowError(
                StoreBaseError,
            );
        });

        it('should update solution', () => {
            const question = new QuestionModel();
            solution.question = question;
            const s = solutionStore.updateSolution(solution);
            expect(s).toBeDefined();
            expect(s!.question).toEqual(question);
        });
        it('should not update solution', () => {
            const notExistingSolution = <SolutionModel>{
                ...solution,
                id: solutionStore.newId,
            };
            expect(() =>
                solutionStore.updateSolution(notExistingSolution),
            ).toThrowError(StoreBaseError);
        });

        it('should remove solution', () => {
            solutionStore.removeSolution(solution);
            expect(solutionStore.solutions).not.toContain(solution);
        });
        it('should not remove solution', () => {
            const notExistingSolution = <SolutionModel>{
                ...solution,
                id: solutionStore.newId,
            };
            expect(() =>
                solutionStore.removeSolution(notExistingSolution),
            ).toThrowError(StoreBaseError);
        });
    });
});
