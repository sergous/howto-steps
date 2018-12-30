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

    it('should set ERROR', () => {
        expect(solutionStore.ERROR).toBe(SolutionStoreError);
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
            expect(() => solutionStore.add(solution)).toThrowError(
                solutionStore.ERROR,
            );
        });

        it('should update solution', () => {
            const question = new QuestionModel();
            solution.question = question;
            const s = solutionStore.update(solution);
            expect(s).toBeDefined();
            expect(s!.question).toEqual(question);
        });
        it('should not update solution', () => {
            const notExistingSolution = <SolutionModel>{
                ...solution,
                id: solutionStore.newId,
            };
            expect(() =>
                solutionStore.update(notExistingSolution),
            ).toThrowError(solutionStore.ERROR);
        });

        it('should remove solution', () => {
            solutionStore.remove(solution);
            expect(solutionStore.solutions).not.toContain(solution);
        });
        it('should not remove solution', () => {
            const notExistingSolution = <SolutionModel>{
                ...solution,
                id: solutionStore.newId,
            };
            expect(() =>
                solutionStore.remove(notExistingSolution),
            ).toThrowError(solutionStore.ERROR);
        });
    });
});
