import { RoleType, Id } from '.';

export interface UserData {
    id?: Id;
    name: string;
    email: string;
    role?: RoleType;
}
