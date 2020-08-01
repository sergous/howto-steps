import { Item, Id, ItemModel } from '.';
import { ItemsModelError } from '../errors';
import { action, observable } from 'mobx';

export class ItemsModel {
    @action
    static addItem = (items: Item[]) => (item: Item) => {
        items.push(item);
        return items;
    };

    @action
    static updateItem = (items: Item[]) => (item: Item) => {
        let foundItem = ItemsModel.findOneItem(items)(item);
        if (!foundItem) return;
        return Object.assign(foundItem, item);
    };

    @action
    static removeItem = (items: Item[]) => (item: Item): Item[] =>
        items.filter(i => !!item.id && i.id !== item.id);

    static findOneItem = (items: Item[]) => (item: Item): Item | undefined =>
        items.find(i => !!item.id && i.id === item.id);

    static findItemIndex = (items: Item[]) => (
        item: Item,
    ): number | undefined => {
        const index = items.findIndex(
            i => !!item && !!item.id && i.id === item.id,
        );
        if (index === -1) return;
        return index;
    };

    @observable private items_: Item[] = [];

    constructor(items?: Item[]) {
        if (items) this.items_ = items;
    }

    set items(items: Item[]) {
        this.items_ = items;
    }

    get items() {
        return this.items_;
    }

    get newId(): Id {
        return ItemModel.uniqId;
    }

    @action
    create(item: Item = new ItemModel()): Item {
        item.id = this.newId;
        this.add(item);
        return item;
    }

    @action
    add(item: Item): Item {
        if (!item.id) throw new this.ERROR('should have id');
        const found = this.findOne(item);
        if (found) throw new this.ERROR('already exists');
        ItemsModel.addItem(this.items_)(item);
        return item;
    }

    @action
    update(item: Item) {
        this.findOneOrThrowError_(item);
        return ItemsModel.updateItem(this.items_)(item);
    }

    @action
    remove(item: Item) {
        this.findOneOrThrowError_(item);
        return (this.items_ = ItemsModel.removeItem(this.items_)(item));
    }

    findOne(item: Item) {
        return ItemsModel.findOneItem(this.items_)(item);
    }

    findIndex(item: Item) {
        return ItemsModel.findItemIndex(this.items_)(item);
    }

    private findOneOrThrowError_(
        item: Item,
        errorMessage: string = 'not found',
    ): Item {
        let i = this.findIndex(item);
        if (i === undefined) throw new this.ERROR(errorMessage);
        return i;
    }

    ERROR = ItemsModelError;
}
