import { RootStore, SolutionStore } from '.';
import { QuestionModel } from '../models';

describe('root store', () => {
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

    it('should add new question', () => {
        const question = new QuestionModel('How is the whether today?');
        solutionStore.addQuestion(question);
        expect(solutionStore.questions).toContain(question);
    });
});
