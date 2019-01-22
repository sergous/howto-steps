import { ItemModel } from '.';
import { ItemModelError } from '../errors';
import { StoreCore, RootStore } from '../stores';

describe('ItemModel', () => {
    beforeEach(() => {});
    let itemModel: ItemModel;

    describe('with solution', () => {
        beforeEach(() => {
            itemModel = new ItemModel();
        });

        it('should have id', () => {
            expect(itemModel.id).toBeDefined();
        });

        it('should set id', () => {
            itemModel.id = itemModel.newId;
            expect(itemModel.id).toBeDefined();
        });

        it('should not have create datetime', () => {
            expect(itemModel.createTime).not.toBeDefined();
        });

        it('should set create datetime', () => {
            itemModel.createTime = Date.now();
            expect(itemModel.createTime).toBeDefined();
        });

        it('should not have update datetime', () => {
            expect(itemModel.updateTime).not.toBeDefined();
        });

        it('should set update datetime', () => {
            itemModel.updateTime = Date.now();
            expect(itemModel.updateTime).toBeDefined();
        });

        it('should update id', () => {
            const newId = 'newId';
            itemModel.id = newId;
            expect(itemModel.id).toBe(newId);
        });
    });

    describe('bind', () => {
        let store1: StoreCore;
        let rootStore: RootStore;

        beforeEach(() => {
            rootStore = new RootStore();
            store1 = new StoreCore(rootStore);
        });

        describe('constructor', () => {
            beforeEach(() => {
                itemModel = new ItemModel(store1);
            });
            it('should create item in store1', () => {
                expect(store1.findOne(itemModel)).toBe(itemModel);
            });
            it('should not update id', () => {
                const setId = () => (itemModel.id = 'newId');
                expect(setId).toThrowError(ItemModelError);
            });
            it('should be in store', () => {
                expect(itemModel.isInStore).toBeTruthy();
            });
        });

        describe('bindToStore', () => {
            beforeEach(() => {
                itemModel.bindToStore(store1);
            });
            it('should create item in store1', () => {
                expect(store1.findOne(itemModel)).toBe(itemModel);
            });
            it('should be in store', () => {
                expect(itemModel.isInStore).toBeTruthy();
            });
        });

        describe('unbindFromStore', () => {
            beforeEach(() => {
                itemModel = new ItemModel(store1);
            });
            it('should remove item from store1', () => {
                itemModel.unbindFromStore(store1);
                expect(store1.findOne(itemModel)).toBeUndefined();
                expect(itemModel.isInStore).toBeFalsy();
            });
        });

        describe('move', () => {
            let store2: StoreCore;

            beforeEach(() => {
                store2 = new StoreCore(rootStore);
                itemModel = new ItemModel(store1);
                const anyItemModel = itemModel as any;
                anyItemModel.bindToStore(store2);
            });

            it('should create item in store2', () => {
                expect(store2.findOne(itemModel)).toBe(itemModel);
            });

            it('should remove item from store1', () => {
                expect(store1.findOne(itemModel)).toBeUndefined();
            });
        });
    });
});
