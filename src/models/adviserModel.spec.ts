import { QuestionModel } from './questionModel';
import { AdviserModel } from '.';

const userData = {
    id: 1,
    name: 'User Name',
    email: 'user@host.com',
};

describe('adviserModel', () => {
    let adviser: AdviserModel;
    let question: QuestionModel;

    beforeEach(() => {
        adviser = new AdviserModel(userData);
        question = new QuestionModel('How many miles in one kilometer');
    });

    it('should have question', () => {
        adviser.answer(question);
        expect(adviser.questions).toContain(question);
    });
});
