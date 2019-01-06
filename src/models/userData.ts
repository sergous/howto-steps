import { Role, Id } from '.';

export interface UserData {
    id?: Id;
    name: string;
    email: string;
    role?: Role;
}
