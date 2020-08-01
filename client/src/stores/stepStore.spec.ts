import { RootStore, StepStore } from '.';
import { StepModel } from '../models';
import { StepStoreError } from '../errors';

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
        store.add(step);
        expect(store.steps).toContain(step);
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(StepStoreError);
    });

    describe('with step', () => {
        let step: StepModel;

        beforeEach(() => {
            step = new StepModel('Jump on right foot', 'Sit then jump', store);
        });

        it('should have step', () => {
            expect(store.steps).toContain(step);
        });
    });
});
