import { RootStore, AnswerStore } from '.';
import { AnswerModel } from '../models';
import { AnswerStoreError } from '../errors';

describe('answer store', () => {
    let rootStore: RootStore;
    let answerStore: AnswerStore;

    beforeEach(() => {
        rootStore = new RootStore();
        answerStore = new AnswerStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(answerStore).toHaveProperty('rootStore');
        expect(answerStore.rootStore).toBeDefined();
        expect(answerStore.rootStore).toBeInstanceOf(RootStore);
    });

    it('should set error', () => {
        expect(answerStore.ERROR).toBe(AnswerStoreError);
    });

    describe('with answer', () => {
        let answer: AnswerModel;

        beforeEach(() => {
            answer = new AnswerModel(answerStore);
        });

        it('should have answer', () => {
            expect(answerStore.answers).toContain(answer);
        });
    });
});
