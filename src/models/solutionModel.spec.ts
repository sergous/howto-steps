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
        solutionStore.addSolution = jest.fn();
        solutionStore.updateSolution = jest.fn();
    });

    it('should create new solution', () => {
        solution = solutionStore.createSolution();
        expect(solutionStore.addSolution).toBeCalledWith(solution);
        expect(solution.id).toBeDefined();
    });

    describe('with solution', () => {
        beforeEach(() => {
            solution = new SolutionModel(solutionStore);
        });

        it('should hold ref to solution store', () => {
            expect(solution).toHaveProperty('solutionStore_');
        });
        it('should set question', () => {
            solution.question = question;
            expect(solutionStore.updateSolution).toBeCalled();
            expect(solution.question).toBe(question);
        });

        describe('update solution', () => {
            it('should not update id second time', () => {
                solution.id = solutionStore.newId;
                expect(() => (solution.id = 1)).toThrowError(
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
                const updated = new QuestionModel(
                    'How to updated question feel?',
                );
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
});
