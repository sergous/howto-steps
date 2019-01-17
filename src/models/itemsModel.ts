import { ItemModel } from '.';
import { ItemsModelError } from '../errors';
import { action, observable } from 'mobx';

export class ItemsModel {
    @action
    static addItem = (items: ItemModel[]) => (item: ItemModel) => {
        items.push(item);
        return items;
    };

    @action
    static removeItem = (items: ItemModel[]) => (
        item: ItemModel,
    ): ItemModel[] => items.filter(i => !!item.id && i.id !== item.id);

    static findOneItem = (items: ItemModel[]) => (
        item: ItemModel,
    ): ItemModel | undefined => items.find(i => !!item.id && i.id === item.id);

    static findItemIndex = (items: ItemModel[]) => (
        item: ItemModel,
    ): number | undefined => {
        const index = items.findIndex(i => !!item.id && i.id === item.id);
        if (index === -1) return;
        return index;
    };

    @observable private items_: ItemModel[] = [];

    constructor(items?: ItemModel[]) {
        if (items) this.items_ = items;
    }

    set items(items: ItemModel[]) {
        this.items_ = items;
    }

    get items() {
        return this.items_;
    }

    add(item: ItemModel) {
        return (this.items_ = ItemsModel.addItem(this.items_)(item));
    }

    remove(item: ItemModel) {
        return (this.items_ = ItemsModel.removeItem(this.items_)(item));
    }

    findOne(item: ItemModel) {
        return ItemsModel.findOneItem(this.items_)(item);
    }

    findIndex(item: ItemModel) {
        return ItemsModel.findItemIndex(this.items_)(item);
    }

    ERROR = ItemsModelError;
}
