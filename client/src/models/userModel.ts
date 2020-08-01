import { UserData, ItemModel, UserRole, RoleType } from '.';
import { UserStore } from '../stores';
import { observable } from 'mobx';
import { UserModelError } from '../errors';

export class UserModel extends ItemModel {
    static ROLE = RoleType;
    @observable name: string = '';
    @observable email: string = '';
    @observable protected role_?: UserRole;

    ERROR = UserModelError;

    constructor(userData: UserData, store?: UserStore) {
        super(store);
        Object.assign(this, userData);
    }

    set role(role: UserRole) {
        this.role_ = role;
    }

    get role(): UserRole {
        return this.role_;
    }
}
