import { UserData, CommonModel, Id } from '.';
import { UserStore } from '../stores';
import { observable } from 'mobx';
export enum Role {
    Guest,
    Asker,
    Adviser,
    Reviewer,
    Expert,
}

export interface UserData {
    id?: Id;
    name: string;
    email: string;
    role?: Role;
}

export class UserModel extends CommonModel {
    static ROLE = Role;
    @observable name: string = '';
    @observable email: string = '';
    @observable protected role_: Role;

    constructor(userData: UserData, store?: UserStore) {
        super(store);
        Object.assign(this, userData);
        this.role_ = userData.role || Role.Guest;
    }

    set role(role: Role) {
        this.role_ = role;
    }

    get role(): Role {
        return this.role_;
    }

    toJSON() {
        const { id, name, email, role } = this;
        return { id, name, email, role };
    }
}
