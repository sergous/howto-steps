import { StoreBase } from '.';
import { CommonModel } from '../models';
import { StoreBaseError } from '../errors';

describe('StoreBase', () => {
    let storeBase: StoreBase;
    let item: CommonModel;
    beforeEach(() => {
        storeBase = new StoreBase();
    });

    it('should set ERROR', () => {
        expect(storeBase.ERROR).toBe(StoreBaseError);
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
            expect(() => storeBase.add(item)).toThrowError(storeBase.ERROR);
        });

        it('should update item', () => {
            const i = storeBase.update(item);
            expect(i).toBeDefined();
            expect(i!.id).toEqual(item.id);
        });
        it('should not update item', () => {
            const notExistingItem = <CommonModel>{
                ...item,
                id: storeBase.newId,
            };
            expect(() => storeBase.update(notExistingItem)).toThrowError(
                storeBase.ERROR,
            );
        });

        it('should remove item', () => {
            storeBase.remove(item);
            expect(storeBase.items).not.toContain(item);
        });
        it('should not remove item', () => {
            const notExistingItem = <CommonModel>{
                ...item,
                id: storeBase.newId,
            };
            expect(() => storeBase.remove(notExistingItem)).toThrowError(
                storeBase.ERROR,
            );
        });
    });
});
