import { QuestionModel, QuestionRequestModel, TagModel } from '.';
import { RootStore, QuestionRequestStore } from '../stores';

describe('questionRequestModel', () => {
    let request: QuestionRequestModel;
    let question: QuestionModel;
    let tag: TagModel;
    let tags: TagModel[];

    beforeEach(() => {
        question = new QuestionModel('What is length of Moscow river?');
        request = new QuestionRequestModel(question);
        tag = new TagModel(TagModel.TYPE.Price);
        tags = [tag];
    });

    it('should create new question request', () => {
        expect(request.question).toEqual(question);
    });

    it('should set question for request', () => {
        const q = new QuestionModel();
        request.question = q;
        expect(request.question).toEqual(q);
    });

    it('should set tags', () => {
        request.tags.items = tags;
        expect(request.tags.items).toEqual(tags);
    });

    it('should add tag', () => {
        request.tags.add(tag);
        expect(request.tags.items).toContain(tag);
    });

    describe('with tag', () => {
        beforeEach(() => {
            request.tags.add(tag);
        });

        it('should remove tag', () => {
            request.tags.remove(tag);
            expect(request.tags).not.toContain(tag);
        });
    });

    describe('with store', () => {
        let store: QuestionRequestStore;

        beforeEach(() => {
            const rootStore = new RootStore();
            store = rootStore.questionRequestStore;
            request = new QuestionRequestModel(question, store);
        });

        it('should hold ref to questionRequest store', () => {
            const anyRequest = request as any;
            expect(anyRequest).toHaveProperty('store_');
            expect(anyRequest.store_).toBeDefined();
            expect(anyRequest.store_).toBeInstanceOf(QuestionRequestStore);
        });

        it('should find questionRequest in store', () => {
            expect(store.findOne(request)).toBe(request);
        });
    });
});
