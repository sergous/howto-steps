import { AnswerModel } from './answerModel';
import { StepModel, TagModel } from '.';
import { AnswerStore, RootStore } from '../stores';

describe('answerModel', () => {
    let steps: StepModel[];
    let step: StepModel;
    let answer: AnswerModel;
    let tag: TagModel;
    let tags: TagModel[];

    beforeEach(() => {
        step = new StepModel('Step name', 'Step description');
        steps = [step];
        tag = new TagModel(TagModel.TYPE.Price);
        tags = [tag];
        answer = new AnswerModel();
    });

    it('should set steps', () => {
        answer.steps.items = steps;
        expect(answer.steps.items).toEqual(steps);
    });

    it('should add step', () => {
        answer.steps.add(step);
        expect(answer.steps.items).toContain(step);
    });

    describe('with step', () => {
        beforeEach(() => {
            answer.steps.add(step);
        });

        it('should remove step', () => {
            answer.steps.remove(step);
            expect(answer.steps).not.toContain(step);
        });
    });

    it('should set tags', () => {
        answer.tags.items = tags;
        expect(answer.tags.items).toEqual(tags);
    });

    it('should add tag', () => {
        answer.tags.add(tag);
        expect(answer.tags.items).toContain(tag);
    });

    describe('with tag', () => {
        beforeEach(() => {
            answer.tags.add(tag);
        });

        it('should remove tag', () => {
            answer.tags.remove(tag);
            expect(answer.tags).not.toContain(tag);
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
