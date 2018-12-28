import { RootStore, StepStore } from '.';
import { StepModel } from '../models';

describe('step store', () => {
    let rootStore: RootStore;
    let stepStore: StepStore;

    beforeEach(() => {
        rootStore = new RootStore();
        stepStore = new StepStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(stepStore).toHaveProperty('rootStore');
        expect(stepStore.rootStore).toBeDefined();
        expect(stepStore.rootStore).toBeInstanceOf(RootStore);
    });

    it('should add new step', () => {
        const step = new StepModel('New step');
        stepStore.addStep(step);
        expect(stepStore.steps).toContain(step);
    });
});
