import { SolutionModel, StepModel, AnswerModel, QuestionModel } from '.';

describe('SolutionModel', () => {
    let answer: AnswerModel;
    let solution: SolutionModel;
    let question: QuestionModel;

    beforeEach(() => {
        question = new QuestionModel('How to pull?');
        const step1 = new StepModel('Take handle');
        const step2 = new StepModel('Push with handle');
        answer = new AnswerModel(step1, step2);
        solution = new SolutionModel(question);
    });

    it('should init with question', () => {
        expect(solution.question).toBe(question);
    });

    describe('update solution', () => {
        it('should update question query', () => {
            const updated = 'How to updated query feel?';
            solution.question.query = updated;
            expect(solution.question.query).toContain(updated);
        });
        it('should update question', () => {
            const updated = new QuestionModel('How to updated question feel?');
            solution.question = updated;
            expect(solution.question).toBe(updated);
        });
    });

    describe('add answer', () => {
        beforeEach(() => {
            solution.addAnswer(answer);
        });
        it('should have answer', () => {
            expect(solution.answers).toContain(answer);
        });
    });
});
