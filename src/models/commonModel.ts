import { observable, action } from 'mobx';
import { CommonModelError } from '../errors';
import { Datetime, Id, ItemModel } from '.';
import { StoreCore } from '../stores';

export class CommonModel {
    static remove = (items: ItemModel[]) => (item: ItemModel): ItemModel[] =>
        items.filter(i => !!item.id && i.id !== item.id);

    static findOne = (items: ItemModel[]) => (
        item: ItemModel,
    ): ItemModel | undefined => items.find(i => !!item.id && i.id === item.id);

    static findIndex = (items: ItemModel[]) => (
        item: ItemModel,
    ): number | undefined => {
        const index = items.findIndex(i => !!item.id && i.id === item.id);
        if (index === -1) return;
        return index;
    };

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
}
