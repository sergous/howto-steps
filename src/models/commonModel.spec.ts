import { CommonModel } from '.';
import { CommonModelError } from '../errors';
import { StoreCore } from '../stores';

describe('CommonModel', () => {
    beforeEach(() => {});
    let commonModel: CommonModel;

    describe('with solution', () => {
        beforeEach(() => {
            commonModel = new CommonModel();
        });

        it('should not have id', () => {
            expect(commonModel.id).not.toBeDefined();
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

        describe('with id', () => {
            beforeEach(() => (commonModel.id = 'newId'));

            it('should not update id', () => {
                const setId = () => (commonModel.id = 'newId');
                expect(setId).toThrowError(CommonModelError);
            });
        });
    });

    describe('bind', () => {
        let store1: StoreCore;

        beforeEach(() => {
            store1 = new StoreCore();
        });

        describe('constructor', () => {
            beforeEach(() => {
                commonModel = new CommonModel(store1);
            });
            it('should create item in store1', () => {
                expect(store1.findOne(commonModel)).toBe(commonModel);
            });
        });

        describe('bindToStore', () => {
            beforeEach(() => {
                commonModel.bindToStore(store1);
            });
            it('should create item in store1', () => {
                expect(store1.findOne(commonModel)).toBe(commonModel);
            });
        });

        describe('unbindFromStore', () => {
            beforeEach(() => {
                commonModel = new CommonModel(store1);
            });
            it('should remove item from store1', () => {
                commonModel.unbindFromStore(store1);
                expect(store1.findOne(commonModel)).toBeUndefined();
            });
        });

        describe('move', () => {
            let store2: StoreCore;

            beforeEach(() => {
                store2 = new StoreCore();
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
