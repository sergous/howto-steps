import { RootStore, TagStore } from '.';
import { TagStoreError } from '../errors';
import { TagModel } from '../models';

describe('tag store', () => {
    let store: TagStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.tagStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(TagStoreError);
    });

    describe('with tag', () => {
        let tag: TagModel;

        beforeEach(() => {
            tag = new TagModel(TagModel.TYPE.Domain, store);
        });

        it('should have tag', () => {
            expect(store.tags).toContain(tag);
        });
    });
});
