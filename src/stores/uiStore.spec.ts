import { RootStore, UiStore } from '.';

describe('ui store', () => {
    let store: UiStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.uiStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    describe('requests', () => {
        beforeEach(() => {});

        it('should start request', () => {
            store.startRequest();
            expect(store.pendingRequestsCount).toBe(1);
            expect(store.hasPendingRequests).toBeTruthy();
        });

        it('should finish request', () => {
            store.startRequest();
            store.finishRequest();
            expect(store.pendingRequestsCount).toBe(0);
            expect(store.hasPendingRequests).toBeFalsy();
        });

        it('should clear requests', () => {
            store.startRequest(2);
            expect(store.pendingRequestsCount).toBe(2);

            store.clearPendingRequests();

            expect(store.pendingRequestsCount).toBe(0);
            expect(store.hasPendingRequests).toBeFalsy();
        });
    });
});
