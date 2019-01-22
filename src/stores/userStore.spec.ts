import { RootStore, UserStore } from '.';
import { UserStoreError } from '../errors';
import { UserModel, UserData } from '../models';

describe('question store', () => {
    let store: UserStore;

    beforeEach(() => {
        const rootStore = new RootStore();
        store = rootStore.userStore;
    });

    it('should hold ref to root store', () => {
        expect(store).toHaveProperty('rootStore');
        expect(store.rootStore).toBeDefined();
        expect(store.rootStore).toBeInstanceOf(RootStore);
    });

    it('should set ERROR', () => {
        expect(store.ERROR).toBe(UserStoreError);
    });

    describe('with user', () => {
        let user: UserModel;

        beforeEach(() => {
            const userData: UserData = {
                name: 'User Name',
                email: 'user@host.com',
            };
            user = new UserModel(userData, store);
        });

        it('should have user', () => {
            expect(store.users).toContain(user);
        });
    });
});
