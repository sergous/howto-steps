import { QuestionModel, StepModel, AnswerModel } from '.';

describe('questionModel', () => {
    let answer: AnswerModel;
    let question: QuestionModel;
    let query: string;

    beforeEach(() => {
        query = 'How to pull?';
        const step1 = new StepModel('Take handle');
        const step2 = new StepModel('Push with handle');
        answer = new AnswerModel(step1, step2);
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

    it('should update query', () => {
        const query = 'How to drow a pen';
        question.query = query;
        expect(question.query).toBe(query);
    });

    describe('set answers', () => {
        beforeEach(() => {
            question.answers = [answer];
        });
        it('should have answer', () => {
            expect(question.answers).toContain(answer);
        });
    });

    describe('add answer', () => {
        beforeEach(() => {
            question.addAnswer(answer);
        });
        it('should have answer', () => {
            expect(question.answers).toContain(answer);
        });
    });
});
