import { SolutionModel, StepModel, AnswerModel, QuestionModel } from '.';
import { RootStore, SolutionStore } from '../stores';
import { SolutionModelError } from '../errors';

describe('SolutionModel', () => {
    let answer: AnswerModel;
    let solution: SolutionModel;
    let question: QuestionModel;
    let solutionStore: SolutionStore;

    beforeEach(() => {
        question = new QuestionModel('How to pull?');
        const step1 = new StepModel('Take handle');
        const step2 = new StepModel('Push with handle');
        answer = new AnswerModel(step1, step2);

        const rootStore = new RootStore();
        solutionStore = new SolutionStore(rootStore);
    });

    it('should create new solution', () => {
        solution = new SolutionModel(solutionStore);
        expect(solution.id).toBeDefined();
    });

    describe('with solution', () => {
        beforeEach(() => {
            solution = new SolutionModel(solutionStore);
        });

        it('should hold ref to solution store', () => {
            expect(solution).toHaveProperty('store_');
        });
        it('should not have question', () => {
            expect(solution.question).toBeUndefined();
        });
        it('should set question', () => {
            solution.question = question;
            const s = solutionStore.findOne(solution);
            expect(s).toBeDefined();
            expect(s!.question).toBe(question);
        });

        describe('update solution', () => {
            let updatedQuestion: QuestionModel;
            beforeEach(() => {
                updatedQuestion = new QuestionModel(
                    'How to updated question feel?',
                );
            });
            it('should not update id second time', () => {
                expect(() => (solution.id = solutionStore.newId)).toThrowError(
                    SolutionModelError,
                );
            });
            it('should update question query', () => {
                solution.question = question;
                const updated = 'How to updated query feel?';
                solution.question.query = updated;
                expect(solution.question.query).toContain(updated);
            });
            it('should update question', () => {
                solution.question = updatedQuestion;
                expect(solution.question).toBe(updatedQuestion);
            });
            it('should update question in solution store', () => {
                solution.question = updatedQuestion;
                const s = solutionStore.findOne(solution);
                expect(s).toBeDefined();
                expect(s!.question).toBe(updatedQuestion);
            });
        });

        describe('add answer', () => {
            beforeEach(() => {
                solution.addAnswer(answer);
            });
            it('should contain answer', () => {
                expect(solution.answers).toContain(answer);
            });
            it('should contain answer in solution store', () => {
                const s = solutionStore.findOne(solution);
                expect(s).toBeDefined();
                expect(s!.answers).toContain(answer);
            });
        });
    });
});
