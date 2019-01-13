import { CommonModel, TagType } from '.';
import { observable } from 'mobx';
import { TagStore } from '../stores';

export class TagModel extends CommonModel {
    @observable private type_: TagType;
    static TYPE = TagType;

    constructor(type: TagType, store?: TagStore) {
        super(store);
        this.type_ = type;
    }

    set type(type: TagType) {
        this.type_ = type;
    }

    get type(): TagType {
        return this.type_;
    }
}
