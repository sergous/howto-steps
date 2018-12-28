import { RootStore, AnswerStore } from '.';
import { AnswerModel } from '../models';

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

    it('should add new answer', () => {
        const answer = new AnswerModel();
        answerStore.addAnswer(answer);
        expect(answerStore.answers).toContain(answer);
    });
});
