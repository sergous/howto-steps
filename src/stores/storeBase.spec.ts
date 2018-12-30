import { StoreBase } from '.';

describe('StoreBase', () => {
    let storeBase: StoreBase;
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
});
