import { SolutionModel } from '.';
import { RootStore, SolutionStore } from '../stores';
import { CommonModelError } from '../errors';

describe('CommonModel', () => {
    let solution: SolutionModel;
    let solutionStore: SolutionStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        solutionStore = new SolutionStore(rootStore);
    });

    it('should create id', () => {
        solution = new SolutionModel(solutionStore);
        expect(solution.id).toBeDefined();
    });

    describe('with solution', () => {
        beforeEach(() => {
            solution = new SolutionModel(solutionStore);
        });

        it('should not update id', () => {
            expect(() => (solution.id = solutionStore.newId)).toThrowError(
                CommonModelError,
            );
        });
    });
});
