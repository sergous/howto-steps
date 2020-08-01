import { RootStore, RequestStore } from '.';
import { QuestionRequestModel, QuestionModel } from '../models';
import { RequestStoreError } from '../errors';

describe('request store', () => {
    let store: RequestStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.requestStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(RequestStoreError);
    });

    describe('with questionRequest', () => {
        let questionRequest: QuestionRequestModel;

        beforeEach(() => {
            const question = new QuestionModel('What time is it?');
            questionRequest = new QuestionRequestModel(question, store);
        });

        it('should have questionRequest', () => {
            expect(store.questionRequests).toContain(questionRequest);
        });
    });
});
