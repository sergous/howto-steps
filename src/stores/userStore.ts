import { StoreCore } from '.';
import { UserModel } from '../models';

export class UserStore extends StoreCore {
    set users(users: UserModel[]) {
        this.items = users;
    }

    get users(): UserModel[] {
        return <UserModel[]>this.items;
    }
}
