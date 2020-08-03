import { RootStore, QuestionStore } from '.';
import { QuestionStoreError } from '../errors';
import { QuestionApi } from '../api';

describe('question store', () => {
    let store: QuestionStore;
    const apiMock = new QuestionApi();

    beforeEach(() => {
        store = new QuestionStore(new RootStore(), apiMock);
        spyOn(apiMock, 'createOne');
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should create a question', () => {
        const query = 'When is the best time?';
        store.createOne(query);
        expect(apiMock.createOne).toHaveBeenCalled();
    });
    it('should set ERROR', () => {
        expect(store.ERROR).toBe(QuestionStoreError);
    });
});
