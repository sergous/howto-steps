import { ItemModel, Id, CommonModel } from '.';
import { ItemsModelError } from '../errors';
import { action, observable } from 'mobx';

export class ItemsModel {
    @action
    static addItem = (items: ItemModel[]) => (item: ItemModel) => {
        items.push(item);
        return items;
    };

    @action
    static updateItem = (items: ItemModel[]) => (item: ItemModel) => {
        let foundItem = ItemsModel.findOneItem(items)(item);
        if (!foundItem) return;
        return Object.assign(foundItem, item);
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

    get newId(): Id {
        return CommonModel.uniqId;
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
        const found = this.findOne(item);
        if (found) throw new this.ERROR('already exists');
        ItemsModel.addItem(this.items_)(item);
        return item;
    }

    @action
    update(item: ItemModel) {
        this.findOneOrThrowError_(item);
        return ItemsModel.updateItem(this.items_)(item);
    }

    @action
    remove(item: ItemModel) {
        this.findOneOrThrowError_(item);
        return (this.items_ = ItemsModel.removeItem(this.items_)(item));
    }

    findOne(item: ItemModel) {
        return ItemsModel.findOneItem(this.items_)(item);
    }

    findIndex(item: ItemModel) {
        return ItemsModel.findItemIndex(this.items_)(item);
    }

    private findOneOrThrowError_(
        item: ItemModel,
        errorMessage: string = 'not found',
    ): ItemModel {
        let i = this.findIndex(item);
        if (i === undefined) throw new this.ERROR(errorMessage);
        return i;
    }

    ERROR = ItemsModelError;
}
