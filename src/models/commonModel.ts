import { observable, action } from 'mobx';
import { CommonModelError } from '../errors';
import { Datetime, Id } from '.';
import { StoreCore } from '../stores';

export class CommonModel {
    @observable protected id_?: Id;
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

    set id(id: Id) {
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

    toObject() {
        let result: any = {};
        const model = this as any;
        for (let prop in model) {
            const item: any = model[prop];
            if (item === undefined) continue;
            if (item instanceof Function) continue;
            if (prop.includes('_')) {
                const getProp = prop.replace('_', '');
                result[getProp] = model[prop];
                continue;
            }

            result[prop] = model[prop];
        }
        return result;
    }
}
