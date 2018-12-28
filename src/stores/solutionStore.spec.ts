import { RootStore, SolutionStore } from '.';
import { SolutionModel } from '../models';

describe('solution store', () => {
    let rootStore: RootStore;
    let solutionStore: SolutionStore;

    beforeEach(() => {
        rootStore = new RootStore();
        solutionStore = new SolutionStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(solutionStore).toHaveProperty('rootStore');
        expect(solutionStore.rootStore).toBeDefined();
        expect(solutionStore.rootStore).toBeInstanceOf(RootStore);
    });

    it('should add new solution', () => {
        const solution = new SolutionModel(solutionStore);
        solutionStore.addSolution(solution);
        expect(solutionStore.solutions).toContain(solution);
    });
});
