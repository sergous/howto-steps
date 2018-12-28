import { QuestionModel } from '.';

describe('questionModel', () => {
    let question: QuestionModel;
    let query: string;

    beforeEach(() => {
        query = 'How to pull?';
        question = new QuestionModel('How to pull?');
    });

    it('should have query', () => {
        expect(question.query).toBe(query);
    });

    it('should update query', () => {
        const updated = 'How to drow a pen';
        question.query = updated;
        expect(question.query).toBe(updated);
    });
});
