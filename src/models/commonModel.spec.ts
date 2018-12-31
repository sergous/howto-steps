import { CommonModel } from '.';
import { CommonModelError } from '../errors';

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
});
