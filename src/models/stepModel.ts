import { ItemModel, ItemsModel } from '.';
import { observable } from 'mobx';
import { StoreCore } from '../stores';

export class StepModel extends ItemModel {
    @observable private name_: string;
    @observable private description_: string;

    solutions = new ItemsModel();

    constructor(name: string, description: string = '', store?: StoreCore) {
        super(store);
        this.name_ = name;
        this.description_ = description;
    }

    set name(name) {
        this.name_ = name;
    }

    get name() {
        return this.name_;
    }

    set description(description: string) {
        this.description_ = description;
    }

    get description() {
        return this.description_;
    }
}
