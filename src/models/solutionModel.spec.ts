import { SolutionModel, StepModel, AnswerModel, QuestionModel } from '.';
import { RootStore, SolutionStore } from '../stores';

describe('SolutionModel', () => {
    let solution: SolutionModel;
    let question: QuestionModel;

    beforeEach(() => {
        question = new QuestionModel('How to pull?');
    });

    describe('with solution', () => {
        beforeEach(() => {
            solution = new SolutionModel();
        });

        it('should not have question', () => {
            expect(solution.question).toBeUndefined();
        });
        it('should set question', () => {
            solution.question = question;
            expect(solution.question).toBe(question);
        });

        describe('update solution', () => {
            let updatedQuestion: QuestionModel;

            beforeEach(() => {
                updatedQuestion = new QuestionModel(
                    'How to updated question feel?',
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
        });

        describe('answers', () => {
            let step1: StepModel;
            let step2: StepModel;
            let step3: StepModel;
            let answer: AnswerModel;
            let answer2: AnswerModel;
            beforeEach(() => {
                step1 = new StepModel('Take handle');
                step2 = new StepModel('Push with handle');
                step3 = new StepModel('Press harder');

                answer = new AnswerModel();
                answer.steps = [step1, step2];

                answer2 = new AnswerModel();
                answer2.steps = [step3];

                solution.answers = [answer];
            });
            it('should contain answer', () => {
                expect(solution.answers).toContain(answer);
            });
            it('shoudld add answer', () => {
                solution.addAnswer(answer2);
                expect(solution.answers).toContain(answer2);
            });
            it('should remove answer', () => {
                solution.removeAnswer(answer);
                expect(solution.answers).not.toContain(answer);
            });
        });
    });

    describe('with store', () => {
        let store: SolutionStore;

        beforeEach(() => {
            const rootStore = new RootStore();
            store = rootStore.solutionStore;
            solution = new SolutionModel(store);
        });

        it('should hold ref to solution store', () => {
            const anySolution = solution as any;
            expect(anySolution).toHaveProperty('store_');
            expect(anySolution.store_).toBeDefined();
            expect(anySolution.store_).toBeInstanceOf(SolutionStore);
        });

        it('should find solution in store', () => {
            expect(store.findOne(solution)).toBe(solution);
        });

        it('should update question in solution store', () => {
            solution.question = question;
            const s = store.findOne(solution);
            expect(s).toBeDefined();
            expect(s!.question).toBe(question);
        });
    });
});
