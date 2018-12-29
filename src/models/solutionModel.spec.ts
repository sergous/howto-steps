import { SolutionModel, StepModel, AnswerModel, QuestionModel } from '.';
import { RootStore, SolutionStore } from '../stores';

describe('SolutionModel', () => {
    let solution: SolutionModel;
    let question: QuestionModel;
    let solutionStore: SolutionStore;

    beforeEach(() => {
        question = new QuestionModel('How to pull?');

        const rootStore = new RootStore();
        solutionStore = new SolutionStore(rootStore);
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
            it('should contain answer in solution store', () => {
                const s = solutionStore.findOne(solution);
                expect(s).toBeDefined();
                expect(s!.answers).toContain(answer);
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
});
