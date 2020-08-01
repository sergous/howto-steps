import { StoreCore } from '.';
import { UserModel } from '../models';
import { UserStoreError } from '../errors';

export class UserStore extends StoreCore {
    ERROR = UserStoreError;

    set users(users: UserModel[]) {
        this.items = users;
    }

    get users(): UserModel[] {
        return <UserModel[]>this.items;
    }
}
