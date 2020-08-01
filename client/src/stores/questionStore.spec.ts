import { RootStore, QuestionStore } from '.';
import { QuestionModel } from '../models';
import { QuestionStoreError } from '../errors';

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
        store.add(question);
        expect(store.questions).toContain(question);
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(QuestionStoreError);
    });

    describe('with question', () => {
        let question: QuestionModel;

        beforeEach(() => {
            question = new QuestionModel('When is the best time?', store);
        });

        it('should have question', () => {
            expect(store.questions).toContain(question);
        });
    });
});
