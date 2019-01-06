import uniqid from 'uniqid';
import { CommonModel, Id, ItemModel } from '../models';
import { observable, action } from 'mobx';
import { StoreCoreError } from '../errors';

export class StoreCore {
    static get uniqId() {
        return uniqid();
    }
    ERROR = StoreCoreError;
    @observable items: ItemModel[] = [];

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
    add(item: ItemModel) {
        const i = this.findOne(item);

        if (i) {
            throw new this.ERROR('already exists');
        } else {
            this.items.push(item);
        }
    }

    @action
    update(item: ItemModel) {
        let i = this.findOne(item);
        if (!i) {
            throw new this.ERROR('not found');
        } else {
            Object.assign(i, item);
            return i;
        }
    }

    @action
    remove(item: ItemModel) {
        let i = this.findOne(item);
        if (!i) {
            throw new this.ERROR('not found');
        } else {
            this.items = this.items.filter(i => !!item.id && i.id !== item.id);
        }
    }

    findOne(item: ItemModel): ItemModel | undefined {
        return this.items.find(i => !!item.id && i.id === item.id);
    }
}
