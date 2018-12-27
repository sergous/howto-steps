import { AnswerModel } from './answerModel';
import { StepModel } from '.';

describe('answerModel', () => {
    let steps: StepModel[];
    let step: StepModel;
    let answer: AnswerModel;

    beforeEach(() => {
        answer = new AnswerModel();
        step = new StepModel('Step name', 'Step description');
        steps = [step];
    });

    it('should set steps', () => {
        answer.steps = steps;
        expect(answer.steps).toBe(steps);
    });

    it('should add steps', () => {
        answer.addStep(step);
        expect(answer.steps).toContain(step);
    });
});
