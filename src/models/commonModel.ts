import { observable, action } from 'mobx';
import { CommonModelError } from '../errors';
import { Datetime } from '.';
import { StoreCore } from '../stores';

export class CommonModel {
    @observable protected id_?: string;
    @observable private createTime_?: Datetime;
    @observable private updateTime_?: Datetime;

    ERROR = CommonModelError;
    private store_?: StoreCore;

    constructor(store?: StoreCore) {
        if (store) this.bindToStore(store);
    }

    @action
    bindToStore(store: StoreCore) {
        if (this.store_) this.unbindFromStore(this.store_);
        this.store_ = store;
        Object.assign(this, this.store_.create(this));
    }

    @action
    unbindFromStore(store: StoreCore) {
        store.remove(this);
        this.id_ = undefined;
        this.store_ = undefined;
    }

    set id(id: string | undefined) {
        if (this.id_) {
            throw new this.ERROR('Immutable id is already set');
        }
        this.id_ = id;
    }
    get id() {
        return this.id_;
    }

    set createTime(d: Datetime) {
        this.createTime_ = d;
    }
    get createTime() {
        return this.createTime_;
    }

    set updateTime(d: Datetime | undefined) {
        this.updateTime_ = d;
    }
    get updateTime() {
        return this.updateTime_;
    }
}
