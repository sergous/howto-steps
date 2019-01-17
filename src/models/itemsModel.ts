import { ItemModel } from '.';
import { ItemsModelError } from '../errors';
import { action } from 'mobx';

export class ItemsModel {
    @action
    static add = (items: ItemModel[]) => (item: ItemModel) => {
        items.push(item);
        return items;
    };

    @action
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

    private items_: ItemModel[] = [];

    constructor(items?: ItemModel[]) {
        if (items) this.items_ = items;
    }

    addItem = ItemsModel.add(this.items_);
    removeItem = ItemsModel.remove(this.items_);
    findOneItem = ItemsModel.findOne(this.items_);
    findItemIndex = ItemsModel.findIndex(this.items_);

    ERROR = ItemsModelError;
}
