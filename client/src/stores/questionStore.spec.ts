import { RootStore, QuestionStore } from '.';
import { QuestionStoreError } from '../errors';
import { QuestionApi } from '../api';
import { QuestionModel } from '../models';

describe('question store', () => {
    let store: QuestionStore;
    const apiMock = new QuestionApi();

    beforeEach(() => {
        store = new QuestionStore(new RootStore(), apiMock);
        spyOn(apiMock, 'createOne');
        spyOn(apiMock, 'updateOneAttr');
        spyOn(apiMock, 'deleteOne').and.returnValue(Promise.resolve);
        spyOn(apiMock, 'deleteListItem');
        spyOn(apiMock, 'findAll');
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

    it('should update a question', () => {
        const question = new QuestionModel();
        const query = 'When is the best place?';
        store.updateOneAttr(question, 'query', query);
        expect(apiMock.updateOneAttr).toHaveBeenCalled();
    });

    it('should delete a question', async () => {
        const question = new QuestionModel();
        await store.deleteOne(question);
        expect(apiMock.deleteOne).toHaveBeenCalled();
        expect(apiMock.deleteListItem).toHaveBeenCalled();
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(QuestionStoreError);
    });
});
