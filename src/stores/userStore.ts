import { RootStore, StoreBase } from '.';
import { observable, action } from 'mobx';
import { UserModel } from '../models';

export class UserStore extends StoreBase {
    rootStore: RootStore;
    @observable users: UserModel[] = [];

    constructor(rootStore: RootStore) {
        super();
        this.rootStore = rootStore;
    }

    @action
    addUser(user: UserModel) {
        this.users.push(user);
    }
}
