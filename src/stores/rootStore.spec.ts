import { RootStore, UiStore } from '.';

describe('root store', () => {
    let rootStore: RootStore;

    beforeEach(() => {
        rootStore = new RootStore();
    });

    it('should hold ref to ui store', () => {
        expect(rootStore).toHaveProperty('uiStore');
        expect(rootStore.uiStore).toBeDefined();
        expect(rootStore.uiStore).toBeInstanceOf(UiStore);
    });
});
