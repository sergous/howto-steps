import { UserModel, UserRole, UserData } from '.';
import { RoleUserModelError } from '../errors';
import { UserStore } from '../stores';

export class RoleUserModel extends UserModel {
    ERROR = RoleUserModelError;

    constructor(userData: UserData, store?: UserStore) {
        super({ ...userData, role: undefined }, store);
    }

    set role(role: UserRole) {
        if ((<any>Object).values(RoleUserModel.ROLE).includes(this.role_))
            throw new RoleUserModelError('role is immutable');
        this.role_ = role;
    }

    get role(): UserRole {
        return this.role_;
    }
}
