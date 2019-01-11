import { UserModel, UserData } from '.';
import { UserStore, RootStore } from '../stores';

describe('userModel', () => {
    let user: UserModel;
    let userData: UserData;

    beforeEach(() => {
        userData = {
            name: 'User Name',
            email: 'user@host.com',
        };
        user = new UserModel(userData);
    });

    it('should create new user', () => {
        expect(user.toObject()).toEqual({
            ...userData,
        });
    });

    it('should set user role', () => {
        const role = UserModel.ROLE.Asker;
        user.role = role;
        expect(user.role).toBe(role);
    });

    describe('with store', () => {
        let store: UserStore;

        beforeEach(() => {
            const rootStore = new RootStore();
            store = rootStore.userStore;
            user = new UserModel(userData, store);
        });

        it('should hold ref to store', () => {
            const anyUser = user as any;
            expect(anyUser).toHaveProperty('store_');
            expect(anyUser.store_).toBeDefined();
            expect(anyUser.store_).toBeInstanceOf(UserStore);
        });

        it('should find user in store', () => {
            expect(store.findOne(user)).toBe(user);
        });
    });
});
