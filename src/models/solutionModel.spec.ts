import { SolutionModel, StepModel, AnswerModel, QuestionModel } from '.';
import { RootStore, SolutionStore } from '../stores';

describe('SolutionModel', () => {
    let answer: AnswerModel;
    let solution: SolutionModel;
    let question: QuestionModel;

    beforeEach(() => {
        question = new QuestionModel('How to pull?');
        const step1 = new StepModel('Take handle');
        const step2 = new StepModel('Push with handle');
        answer = new AnswerModel(step1, step2);

        const rootStore = new RootStore();
        const solutionStore = new SolutionStore(rootStore);
        solution = new SolutionModel(solutionStore);
    });

    it('should hold ref to solution store', () => {
        expect(solution).toHaveProperty('solutionStore_');
    });
    it('should set question', () => {
        solution.question = question;
        expect(solution.question).toBe(question);
    });

    describe('update solution', () => {
        it('should update question query', () => {
            solution.question = question;
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
