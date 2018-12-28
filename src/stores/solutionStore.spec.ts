import { RootStore, SolutionStore } from '.';
import { QuestionModel, SolutionModel } from '../models';

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
        const question = new QuestionModel('How is the whether tomorrow?');
        const solution = new SolutionModel(question);
        solutionStore.addSolution(solution);
        expect(solutionStore.solutions).toContain(solution);
    });
});
