import { QuestionModel } from '.';
import { QuestionStore, RootStore } from '../stores';

describe('questionModel', () => {
    let question: QuestionModel;
    let query: string;

    beforeEach(() => {
        query = 'How to pull?';
        question = new QuestionModel('How to pull?');
    });

    it('should have query', () => {
        expect(question.query).toBe(query);
    });

    it('should update query', () => {
        const updated = 'How to drow a pen';
        question.query = updated;
        expect(question.query).toBe(updated);
    });

    describe('with store', () => {
        let store: QuestionStore;

        beforeEach(() => {
            const rootStore = new RootStore();
            store = rootStore.questionStore;
            question = new QuestionModel(query, store);
        });

        it('should hold ref to store', () => {
            const anyQuestion = question as any;
            expect(anyQuestion).toHaveProperty('store_');
            expect(anyQuestion.store_).toBeDefined();
            expect(anyQuestion.store_).toBeInstanceOf(QuestionStore);
        });

        it('should find question in store', () => {
            expect(store.findOne(question)).toBe(question);
        });
    });
});
