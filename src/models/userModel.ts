import { UserData } from '.';
export enum Role {
    Guest,
    Asker,
    Adviser,
    Reviewer,
    Expert,
}

export interface UserData {
    id: number;
    name: string;
    email: string;
    role?: Role;
}

export class UserModel {
    static ROLE = Role;
    id: number = 0;
    name: string = '';
    email: string = '';
    protected role_: Role;

    constructor(userData: UserData) {
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
