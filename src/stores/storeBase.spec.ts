import { StoreBase } from '.';
import { CommonModel } from '../models';
import { StoreBaseError } from '../errors';

describe('StoreBase', () => {
    let storeBase: StoreBase;
    let item: CommonModel;
    beforeEach(() => {
        storeBase = new StoreBase();
    });
    describe('newId', () => {
        it('should return new string id', () => {
            const newId = storeBase.newId;
            expect(newId).toBeDefined();
            expect(typeof newId).toBe('string');
        });
        it('should create unique id', () => {
            const a = storeBase.newId;
            const b = storeBase.newId;
            expect(a).not.toBe(b);
        });
    });
    describe('with item', () => {
        beforeEach(() => {
            item = storeBase.createItem();
        });

        it('should have item', () => {
            expect(storeBase.items).toContain(item);
        });

        it('should find item', () => {
            expect(storeBase.findOne(item)).toBe(item);
        });

        it('should not add same item', () => {
            expect(() => storeBase.addItem(item)).toThrowError(StoreBaseError);
        });

        it('should update item', () => {
            const i = storeBase.updateItem(item);
            expect(i).toBeDefined();
            expect(i!.id).toEqual(item.id);
        });
        it('should not update item', () => {
            const notExistingItem = <CommonModel>{
                ...item,
                id: storeBase.newId,
            };
            expect(() => storeBase.updateItem(notExistingItem)).toThrowError(
                StoreBaseError,
            );
        });

        it('should remove item', () => {
            storeBase.removeItem(item);
            expect(storeBase.items).not.toContain(item);
        });
        it('should not remove item', () => {
            const notExistingItem = <CommonModel>{
                ...item,
                id: storeBase.newId,
            };
            expect(() => storeBase.removeItem(notExistingItem)).toThrowError(
                StoreBaseError,
            );
        });
    });
});
