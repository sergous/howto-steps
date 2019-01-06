import { AnswerModel } from './answerModel';
import { StepModel } from '.';
import { AnswerStore, RootStore } from '../stores';

describe('answerModel', () => {
    let steps: StepModel[];
    let step: StepModel;
    let answer: AnswerModel;

    beforeEach(() => {
        step = new StepModel('Step name', 'Step description');
        steps = [step];
        answer = new AnswerModel();
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

    describe('with store', () => {
        let store: AnswerStore;

        beforeEach(() => {
            const rootStore = new RootStore();
            store = rootStore.answerStore;
            answer = new AnswerModel(store);
        });

        it('should hold ref to answer store', () => {
            const anyAnswer = answer as any;
            expect(anyAnswer).toHaveProperty('store_');
            expect(anyAnswer.store_).toBeDefined();
            expect(anyAnswer.store_).toBeInstanceOf(AnswerStore);
        });

        it('should find answer in store', () => {
            expect(store.findOne(answer)).toBe(answer);
        });
    });
});
