import {
    RootStore,
    UiStore,
    QuestionStore,
    SolutionStore,
    AnswerStore,
    StepStore,
    UserStore,
    StoreCore,
    TagStore,
    QuestionRequestStore,
} from '.';

describe('root store', () => {
    let rootStore: RootStore;

    beforeEach(() => {
        rootStore = new RootStore();
    });

    describe('StoreCore', () => {
        it('should not store ref to storeCore', () => {
            expect(rootStore).not.toHaveProperty('storeCore');
        });
        // RootStore should not bind StoreCore, only it's children
        it('should not have any store with type StoreCore', () => {
            let store: any;
            for (store in rootStore) {
                expect(store instanceof StoreCore).toBeFalsy();
            }
        });
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

    it('should hold ref to tag store', () => {
        expect(rootStore).toHaveProperty('tagStore');
        expect(rootStore.tagStore).toBeDefined();
        expect(rootStore.tagStore).toBeInstanceOf(TagStore);
    });

    it('should hold ref to question request store', () => {
        expect(rootStore).toHaveProperty('questionRequestStore');
        expect(rootStore.questionRequestStore).toBeDefined();
        expect(rootStore.questionRequestStore).toBeInstanceOf(
            QuestionRequestStore,
        );
    });
});
