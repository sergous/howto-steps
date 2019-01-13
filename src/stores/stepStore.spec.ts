import { RootStore, StepStore } from '.';
import { StepModel } from '../models';

describe('step store', () => {
    let store: StepStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.stepStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should add new step', () => {
        const step = new StepModel('New step');
        step.id = store.newId;
        store.add(step);
        expect(store.steps).toContain(step);
    });
});
