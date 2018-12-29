import { UserModel, UserData } from '.';
import { UserStore, RootStore } from '../stores';

describe('userModel', () => {
    let user: UserModel;
    let rootStore: RootStore;
    let userStore: UserStore;
    let userData: UserData;

    beforeEach(() => {
        rootStore = new RootStore();
        userStore = new UserStore(rootStore);
        userData = {
            id: userStore.newId,
            name: 'User Name',
            email: 'user@host.com',
        };
        user = new UserModel(userData);
    });
    it('should create new user', () => {
        expect(user.toJSON()).toEqual({
            ...userData,
            role: UserModel.ROLE.Guest,
        });
    });

    it('should set user role', () => {
        const role = UserModel.ROLE.Asker;
        user.role = role;
        expect(user.role).toBe(role);
    });
});
