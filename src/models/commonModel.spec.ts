import { CommonModel } from '.';
import { CommonModelError } from '../errors';
import { StoreCore, RootStore } from '../stores';

describe('CommonModel', () => {
    beforeEach(() => {});
    let commonModel: CommonModel;

    describe('with solution', () => {
        beforeEach(() => {
            commonModel = new CommonModel();
        });

        it('should have id', () => {
            expect(commonModel.id).toBeDefined();
        });

        it('should set id', () => {
            commonModel.id = 'commonId';
            expect(commonModel.id).toBeDefined();
        });

        it('should not have create datetime', () => {
            expect(commonModel.createTime).not.toBeDefined();
        });

        it('should set create datetime', () => {
            commonModel.createTime = Date.now();
            expect(commonModel.createTime).toBeDefined();
        });

        it('should not have update datetime', () => {
            expect(commonModel.updateTime).not.toBeDefined();
        });

        it('should set update datetime', () => {
            commonModel.updateTime = Date.now();
            expect(commonModel.updateTime).toBeDefined();
        });

        it('should update id', () => {
            const newId = 'newId';
            commonModel.id = newId;
            expect(commonModel.id).toBe(newId);
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
                commonModel = new CommonModel(store1);
            });
            it('should create item in store1', () => {
                expect(store1.findOne(commonModel)).toBe(commonModel);
            });
            it('should not update id', () => {
                const setId = () => (commonModel.id = 'newId');
                expect(setId).toThrowError(CommonModelError);
            });
            it('should be in store', () => {
                expect(commonModel.isInStore).toBeTruthy();
            });
        });

        describe('bindToStore', () => {
            beforeEach(() => {
                commonModel.bindToStore(store1);
            });
            it('should create item in store1', () => {
                expect(store1.findOne(commonModel)).toBe(commonModel);
            });
            it('should be in store', () => {
                expect(commonModel.isInStore).toBeTruthy();
            });
        });

        describe('unbindFromStore', () => {
            beforeEach(() => {
                commonModel = new CommonModel(store1);
            });
            it('should remove item from store1', () => {
                commonModel.unbindFromStore(store1);
                expect(store1.findOne(commonModel)).toBeUndefined();
                expect(commonModel.isInStore).toBeFalsy();
            });
        });

        describe('move', () => {
            let store2: StoreCore;

            beforeEach(() => {
                store2 = new StoreCore(rootStore);
                commonModel = new CommonModel(store1);
                const anyCommonModel = commonModel as any;
                anyCommonModel.bindToStore(store2);
            });

            it('should create item in store2', () => {
                expect(store2.findOne(commonModel)).toBe(commonModel);
            });

            it('should remove item from store1', () => {
                expect(store1.findOne(commonModel)).toBeUndefined();
            });
        });
    });
});
