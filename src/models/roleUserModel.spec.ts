import { RoleUserModel, UserData } from '.';
import { RoleUserModelError } from '../errors';

describe('roleUserModel', () => {
    let roleUser: RoleUserModel;
    let userData: UserData;

    beforeEach(() => {
        userData = {
            name: 'Role User Name',
            email: 'role@host.com',
        };
        roleUser = new RoleUserModel(userData);
    });

    it('should set ERROR', () => {
        expect(roleUser.ERROR).toBe(RoleUserModelError);
    });

    describe('init role', () => {
        beforeEach(() => {
            userData.role = RoleUserModel.ROLE.Asker;
            roleUser = new RoleUserModel(userData);
        });

        it('should not have role', () => {
            expect(roleUser.role).toBeUndefined();
        });
    });

    describe('set role', () => {
        beforeEach(() => {
            roleUser = new RoleUserModel(userData);
        });

        it('should not have role', () => {
            expect(roleUser.role).toBeUndefined();
        });

        it('should set role', () => {
            roleUser.role = RoleUserModel.ROLE.Asker;
            expect(roleUser.role).toBe(RoleUserModel.ROLE.Asker);
        });
    });

    describe('with role', () => {
        beforeEach(() => {
            roleUser.role = RoleUserModel.ROLE.Asker;
        });
        it('should not change role', () => {
            const updateRole = () =>
                (roleUser.role = RoleUserModel.ROLE.Adviser);
            expect(updateRole).toThrowError(RoleUserModelError);
        });
    });
});
