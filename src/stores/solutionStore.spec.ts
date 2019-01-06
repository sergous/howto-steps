import { RootStore, SolutionStore } from '.';
import { SolutionModel, QuestionModel } from '../models';
import { SolutionStoreError } from '../errors';

describe('solution store', () => {
    let store: SolutionStore;
    let solution: SolutionModel;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.solutionStore;
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(SolutionStoreError);
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    describe('with solution', () => {
        beforeEach(() => {
            solution = new SolutionModel(store);
        });

        it('should have solution', () => {
            expect(store.solutions).toContain(solution);
        });

        it('should find solution', () => {
            expect(store.findOne(solution)).toBe(solution);
        });

        it('should not add same solution', () => {
            expect(() => store.add(solution)).toThrowError(store.ERROR);
        });

        it('should update solution', () => {
            const question = new QuestionModel();
            solution.question = question;
            const s = store.update(solution);
            expect(s).toBeDefined();
            expect(s!.question).toEqual(question);
        });
        it('should not update solution', () => {
            const notExistingSolution = <SolutionModel>{
                ...solution,
                id: store.newId,
            };
            expect(() => store.update(notExistingSolution)).toThrowError(
                store.ERROR,
            );
        });

        it('should remove solution', () => {
            store.remove(solution);
            expect(store.solutions).not.toContain(solution);
        });
        it('should not remove solution', () => {
            const notExistingSolution = <SolutionModel>{
                ...solution,
                id: store.newId,
            };
            expect(() => store.remove(notExistingSolution)).toThrowError(
                store.ERROR,
            );
        });
    });
});
