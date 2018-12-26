import { UserModel } from '.';

const userData = {
    id: 1,
    name: 'User Name',
    email: 'user@host.com',
};

describe('userModel', () => {
    let user: UserModel;
    beforeEach(() => {
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
