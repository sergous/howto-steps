import { StoreCore } from '.';
import { CommonModel } from '../models';
import { StoreCoreError } from '../errors';

describe('StoreCore', () => {
    let storeCore: StoreCore;
    let item: CommonModel;
    beforeEach(() => {
        storeCore = new StoreCore();
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
    describe('with item', () => {
        beforeEach(() => {
            item = storeCore.createItem();
        });

        it('should have item', () => {
            expect(storeCore.items).toContain(item);
        });

        it('should find item', () => {
            expect(storeCore.findOne(item)).toBe(item);
        });

        it('should not add same item', () => {
            expect(() => storeCore.add(item)).toThrowError(storeCore.ERROR);
        });

        it('should update item', () => {
            const i = storeCore.update(item);
            expect(i).toBeDefined();
            expect(i!.id).toEqual(item.id);
        });
        it('should not update item', () => {
            const notExistingItem = <CommonModel>{
                ...item,
                id: storeCore.newId,
            };
            expect(() => storeCore.update(notExistingItem)).toThrowError(
                storeCore.ERROR,
            );
        });

        it('should remove item', () => {
            storeCore.remove(item);
            expect(storeCore.items).not.toContain(item);
        });
        it('should not remove item', () => {
            const notExistingItem = <CommonModel>{
                ...item,
                id: storeCore.newId,
            };
            expect(() => storeCore.remove(notExistingItem)).toThrowError(
                storeCore.ERROR,
            );
        });
    });
});
