import { RootStore, UserStore } from '.';

describe('question store', () => {
    let rootStore: RootStore;
    let userStore: UserStore;

    beforeEach(() => {
        rootStore = new RootStore();
        userStore = new UserStore(rootStore);
    });

    it('should hold ref to root store', () => {
        expect(userStore).toHaveProperty('rootStore');
        expect(userStore.rootStore).toBeDefined();
        expect(userStore.rootStore).toBeInstanceOf(RootStore);
    });
});
