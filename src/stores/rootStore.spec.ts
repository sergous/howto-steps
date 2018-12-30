import {
    RootStore,
    UiStore,
    QuestionStore,
    SolutionStore,
    AnswerStore,
    StepStore,
    UserStore,
} from '.';

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

    it('should hold ref to answer store', () => {
        expect(rootStore).toHaveProperty('answerStore');
        expect(rootStore.answerStore).toBeDefined();
        expect(rootStore.answerStore).toBeInstanceOf(AnswerStore);
    });

    it('should hold ref to step store', () => {
        expect(rootStore).toHaveProperty('stepStore');
        expect(rootStore.stepStore).toBeDefined();
        expect(rootStore.stepStore).toBeInstanceOf(StepStore);
    });

    it('should hold ref to user store', () => {
        expect(rootStore).toHaveProperty('userStore');
        expect(rootStore.userStore).toBeDefined();
        expect(rootStore.userStore).toBeInstanceOf(UserStore);
    });
});
