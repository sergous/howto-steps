import { QuestionModel } from './questionModel';
import { AdviserModel } from '.';
import { UserData } from './userModel';

const advisorData: UserData = {
    id: 'advisorId',
    name: 'Advisor Name',
    email: 'advisor@host.com',
};

describe('adviserModel', () => {
    let adviser: AdviserModel;
    let question: QuestionModel;

    beforeEach(() => {
        adviser = new AdviserModel(advisorData);
        question = new QuestionModel('How many miles in one kilometer');
    });

    it('should answer new question', () => {
        adviser.answer(question);
        expect(adviser.questions).toContain(question);
    });
});
