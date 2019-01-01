import { AnswerModel } from './answerModel';
import { StepModel } from '.';
import { AnswerStore, RootStore } from '../stores';

describe('answerModel', () => {
    let steps: StepModel[];
    let step: StepModel;
    let answer: AnswerModel;
    let answerStore: AnswerStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        answerStore = rootStore.answerStore;
        answer = new AnswerModel(answerStore);
        step = new StepModel('Step name', 'Step description');
        steps = [step];
    });

    it('should hold ref to answer store', () => {
        expect(answer).toHaveProperty('store_');
        const anyAnswer = answer as any;
        expect(anyAnswer.store_).toBeDefined();
        expect(anyAnswer.store_).toBeInstanceOf(AnswerStore);
    });

    it('should set steps', () => {
        answer.steps = steps;
        expect(answer.steps).toEqual(steps);
    });

    it('should add step', () => {
        answer.addStep(step);
        expect(answer.steps).toContain(step);
    });

    describe('with step', () => {
        beforeEach(() => {
            answer.addStep(step);
        });

        it('should remove step', () => {
            answer.removeStep(step);
            expect(answer.steps).not.toContain(step);
        });
    });
});
