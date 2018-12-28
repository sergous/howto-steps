import { RootStore, UiStore } from '.';

describe('ui store', () => {
    let rootStore: RootStore;
    let uiStore: UiStore;

    beforeEach(() => {
        rootStore = new RootStore();
        uiStore = new UiStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(uiStore).toHaveProperty('rootStore');
        expect(uiStore.rootStore).toBeDefined();
        expect(uiStore.rootStore).toBeInstanceOf(RootStore);
    });

    describe('requests', () => {
        beforeEach(() => {});

        it('should start request', () => {
            uiStore.startRequest();
            expect(uiStore.pendingRequestsCount).toBe(1);
            expect(uiStore.hasPendingRequests).toBeTruthy();
        });

        it('should finish request', () => {
            uiStore.startRequest();
            uiStore.finishRequest();
            expect(uiStore.pendingRequestsCount).toBe(0);
            expect(uiStore.hasPendingRequests).toBeFalsy();
        });

        it('should clear requests', () => {
            uiStore.startRequest(2);
            expect(uiStore.pendingRequestsCount).toBe(2);

            uiStore.clearPendingRequests();

            expect(uiStore.pendingRequestsCount).toBe(0);
            expect(uiStore.hasPendingRequests).toBeFalsy();
        });
    });
});
