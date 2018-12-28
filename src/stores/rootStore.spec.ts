import { RootStore, UiStore } from '.';
import { QuestionStore } from './questionStore';
import { SolutionStore } from './solutionStore';

describe('root store', () => {
    let rootStore: RootStore;

    beforeEach(() => {
        rootStore = new RootStore();
    });

    it('should hold ref to ui store', () => {
        expect(rootStore).toHaveProperty('uiStore');
        expect(rootStore.uiStore).toBeDefined();
        expect(rootStore.uiStore).toBeInstanceOf(UiStore);
    });

    it('should hold ref to question store', () => {
        expect(rootStore).toHaveProperty('questionStore');
        expect(rootStore.questionStore).toBeDefined();
        expect(rootStore.questionStore).toBeInstanceOf(QuestionStore);
    });

    it('should hold ref to solution store', () => {
        expect(rootStore).toHaveProperty('solutionStore');
        expect(rootStore.solutionStore).toBeDefined();
        expect(rootStore.solutionStore).toBeInstanceOf(SolutionStore);
    });
});
