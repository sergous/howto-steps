import { StoreCore, RootStore } from '.';
import { ItemModel } from '../models';
import { StoreCoreError } from '../errors';

describe('StoreCore', () => {
    let storeCore: StoreCore;
    let item: ItemModel;
    beforeEach(() => {
        const rootStore = new RootStore();
        storeCore = new StoreCore(rootStore);
    });

    it('should set ERROR', () => {
        expect(storeCore.ERROR).toBe(StoreCoreError);
    });

    describe('newId', () => {
        it('should return new string id', () => {
            const newId = storeCore.newId;
            expect(newId).toBeDefined();
            expect(typeof newId).toBe('string');
        });
        it('should create unique id', () => {
            const a = storeCore.newId;
            const b = storeCore.newId;
            expect(a).not.toBe(b);
        });
    });

    describe('add', () => {
        it('should add item with id', () => {
            item = new ItemModel();
            expect(storeCore.add(item)).toBe(item);
        });
        it('should not add item with no id', () => {
            item = new ItemModel();
            item.id = undefined;
            const addItem = () => storeCore.add(item);
            expect(addItem).toThrowError(StoreCoreError);
        });
    });

    describe('with item', () => {
        beforeEach(() => {
            item = storeCore.create();
        });

        it('should have item', () => {
            expect(storeCore.items).toContain(item);
        });

        it('should find item', () => {
            expect(storeCore.findOne(item)).toBe(item);
        });

        it('should not add same item', () => {
            const add = () => storeCore.add(item);
            expect(add).toThrowError(StoreCoreError);
        });

        it('should update item', () => {
            const i = storeCore.update(item);
            expect(i).toBeDefined();
            expect(i!.id).toEqual(item.id);
        });
        it('should not update item', () => {
            const notExistingItem = <ItemModel>{
                ...item,
                id: storeCore.newId,
            };
            const update = () => storeCore.update(notExistingItem);
            expect(update).toThrowError(StoreCoreError);
        });

        it('should remove item', () => {
            storeCore.remove(item);
            expect(storeCore.items).not.toContain(item);
        });
        it('should not remove item', () => {
            const notExistingItem = <ItemModel>{
                ...item,
                id: storeCore.newId,
            };
            const remove = () => storeCore.remove(notExistingItem);
            expect(remove).toThrowError(StoreCoreError);
        });

        describe('find', () => {
            it('should find existing item', () => {
                expect(storeCore.findOne(item)).toBe(item);
            });
            it('should find not existing item', () => {
                const outItem = { ...item, id: storeCore.newId };
                expect(storeCore.findOne(outItem)).toBeUndefined();
            });
            it('should find existing item index', () => {
                expect(storeCore.findIndex(item)).toBe(0);
            });
            it('should find not existing item index', () => {
                const outItem = { ...item, id: storeCore.newId };
                expect(storeCore.findIndex(outItem)).toBeUndefined();
            });
        });
    });
});
