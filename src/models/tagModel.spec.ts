import { TagModel } from './tagModel';
import { RootStore, TagStore } from '../stores';

describe('tagModel', () => {
    let tag: TagModel;
    let type = TagModel.TYPE.Domain;

    beforeEach(() => {
        tag = new TagModel(type);
    });

    it('should create new tag', () => {
        expect(tag.type).toEqual(TagModel.TYPE.Domain);
    });

    it('should set tag type', () => {
        tag.type = type;
        expect(tag.type).toEqual(type);
    });

    describe('with store', () => {
        let store: TagStore;

        beforeEach(() => {
            const rootStore = new RootStore();
            store = rootStore.tagStore;
            tag = new TagModel(type, store);
        });

        it('should hold ref to store', () => {
            const anyTag = tag as any;
            expect(anyTag).toHaveProperty('store_');
            expect(anyTag.store_).toBeDefined();
            expect(anyTag.store_).toBeInstanceOf(TagStore);
        });

        it('should find tag in store', () => {
            expect(store.findOne(tag)).toBe(tag);
        });
    });
});
