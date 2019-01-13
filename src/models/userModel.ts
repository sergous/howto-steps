import { UserData, CommonModel, UserRole, RoleType } from '.';
import { UserStore } from '../stores';
import { observable } from 'mobx';

export class UserModel extends CommonModel {
    static ROLE = RoleType;
    @observable name: string = '';
    @observable email: string = '';
    @observable protected role_?: UserRole;

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
