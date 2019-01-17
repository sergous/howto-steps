import uniqid from 'uniqid';
import { CommonModel, Id, ItemModel, ItemsModel } from '../models';
import { observable, action } from 'mobx';
import { StoreCoreError } from '../errors';
import { RootStore } from '.';

export class StoreCore {
    static get uniqId() {
        return uniqid();
    }
    ERROR = StoreCoreError;
    @observable items: ItemModel[] = [];
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    get newId(): Id {
        return StoreCore.uniqId;
    }

    @action
    create(item: ItemModel = new CommonModel()): ItemModel {
        item.id = this.newId;
        this.add(item);
        return item;
    }

    @action
    add(item: ItemModel): ItemModel {
        if (!item.id) throw new this.ERROR('should have id');

        const i = this.findOne(item);

        if (i) {
            throw new this.ERROR('already exists');
        } else {
            this.items.push(item);
            return item;
        }
    }

    @action
    update(item: ItemModel): ItemModel {
        let i = this.findOne(item);
        if (!i) {
            throw new this.ERROR('not found');
        } else {
            Object.assign(i, item);
            return i;
        }
    }

    @action
    remove(item: ItemModel): number {
        let i = this.findIndex(item);
        if (i === undefined) {
            throw new this.ERROR('not found');
        } else {
            this.items = ItemsModel.removeItem(this.items)(item);
            return i;
        }
    }

    findOne = (item: ItemModel) => ItemsModel.findOneItem(this.items)(item);

    findIndex = (item: ItemModel) => ItemsModel.findItemIndex(this.items)(item);
}
