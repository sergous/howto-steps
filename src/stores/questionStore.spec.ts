import { RootStore, QuestionStore } from '.';
import { QuestionModel } from '../models';

describe('question store', () => {
    let rootStore: RootStore;
    let questionStore: QuestionStore;

    beforeEach(() => {
        rootStore = new RootStore();
        questionStore = new QuestionStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(questionStore).toHaveProperty('rootStore');
        expect(questionStore.rootStore).toBeDefined();
        expect(questionStore.rootStore).toBeInstanceOf(RootStore);
    });

    it('should add new question', () => {
        const question = new QuestionModel('How is the whether today?');
        questionStore.addQuestion(question);
        expect(questionStore.questions).toContain(question);
    });
});
