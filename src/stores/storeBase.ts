import uniqid from 'uniqid';
import { CommonModel } from '../models';
import { observable, action } from 'mobx';
import { StoreBaseError } from '../errors';

export class StoreBase {
    @observable items: CommonModel[] = [];

    get newId(): string {
        return uniqid();
    }

    @action
    createItem(item: CommonModel = new CommonModel()): CommonModel {
        item.id = this.newId;
        this.addItem(item);
        return item;
    }

    @action
    addItem(item: CommonModel) {
        const i = this.findOne(item);

        if (i) {
            throw new StoreBaseError('Item already exists');
        } else {
            this.items.push(item);
        }
    }

    @action
    updateItem(item: CommonModel) {
        let i = this.findOne(item);
        if (!i) {
            throw new StoreBaseError('Item not found');
        } else {
            Object.assign(i, item);
            return i;
        }
    }

    @action
    removeItem(item: CommonModel) {
        let i = this.findOne(item);
        if (!i) {
            throw new StoreBaseError('Item not found');
        } else {
            this.items = this.items.filter(i => !!item.id && i.id !== item.id);
        }
    }

    findOne(item: CommonModel): CommonModel | undefined {
        return this.items.find(i => !!item.id && i.id === item.id);
    }
}
