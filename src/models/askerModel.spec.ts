import { AskerModel, QuestionModel } from '.';
import { UserData } from './userModel';

const askerData: UserData = {
    id: 'askerId',
    name: 'Asker Name',
    email: 'asker@host.com',
};

describe('userModel', () => {
    let asker: AskerModel;
    beforeEach(() => {
        asker = new AskerModel(askerData);
    });
    it('should create new asker', () => {
        expect(asker.toJSON()).toEqual({
            ...askerData,
            role: AskerModel.ROLE.Asker,
        });
    });
    describe('ask question', () => {
        let question: QuestionModel;
        beforeEach(() => {
            question = new QuestionModel('How to pull?');
            asker.ask(question);
        });
        it('should not have not asked question', () => {
            const newQuestion = new QuestionModel('How to push?');
            expect(asker.questions).not.toContain(newQuestion);
        });
        it('should have new question', () => {
            expect(asker.questions).toContain(question);
        });
    });
});
