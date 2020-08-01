import { RootStore, AnswerStore } from '.';
import { AnswerModel } from '../models';
import { AnswerStoreError } from '../errors';

describe('answer store', () => {
    let store: AnswerStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.answerStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(AnswerStoreError);
    });

    describe('with answer', () => {
        let answer: AnswerModel;

        beforeEach(() => {
            answer = new AnswerModel(store);
        });

        it('should have answer', () => {
            expect(store.answers).toContain(answer);
        });
    });
});
