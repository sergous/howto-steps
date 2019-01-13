import { RootStore, QuestionStore } from '.';
import { QuestionModel } from '../models';

describe('question store', () => {
    let store: QuestionStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.questionStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should add new question', () => {
        const question = new QuestionModel('How is the whether today?');
        question.id = store.newId;
        store.add(question);
        expect(store.questions).toContain(question);
    });
});
