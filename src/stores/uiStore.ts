import { observable } from 'mobx';
import { RootStore } from './rootStore';
export class UiStore {
    readonly rootStore: RootStore;
    @observable pendingRequestsCount: number = 0;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    get hasPendingRequests() {
        return this.pendingRequestsCount > 0;
    }
    readonly startRequest = (num: number = 1) =>
        (this.pendingRequestsCount += num);
    readonly finishRequest = (num: number = 1) => {
        this.pendingRequestsCount -= num;
    };
    readonly clearPendingRequests = () => (this.pendingRequestsCount = 0);
}
