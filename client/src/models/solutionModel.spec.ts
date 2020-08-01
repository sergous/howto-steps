import {
    SolutionModel,
    StepModel,
    AnswerModel,
    QuestionModel,
    ReviewStatus,
    PublishStatus,
} from '.';
import { RootStore, SolutionStore } from '../stores';
import { SolutionModelError } from '../errors';

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

        describe('status', () => {
            it('should set default review status', () => {
                expect(solution.status.review).toBe(ReviewStatus.Pending);
            });

            it('should set defualt publish status', () => {
                expect(solution.status.publish).toBe(PublishStatus.Proposed);
            });

            it('should set review status', () => {
                solution.status.review = ReviewStatus.Accepted;
                expect(solution.status.review).toBe(ReviewStatus.Accepted);
            });

            it('should set publish status', () => {
                solution.status.publish = PublishStatus.Published;
                expect(solution.status.publish).toBe(PublishStatus.Published);
            });
        });

        it('should set ERROR', () => {
            expect(solution.ERROR).toBe(SolutionModelError);
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
                answer.steps.items = [step1, step2];

                answer2 = new AnswerModel();
                answer2.steps.items = [step3];

                solution.answers.items = [answer];
            });
            it('should contain answer', () => {
                expect(solution.answers.items).toContain(answer);
            });
            it('shoudld add answer', () => {
                solution.answers.add(answer2);
                expect(solution.answers.items).toContain(answer2);
            });
            it('should remove answer', () => {
                solution.answers.remove(answer);
                expect(solution.answers.items).not.toContain(answer);
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
