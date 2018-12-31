import { observable } from 'mobx';
import { CommonModelError } from '../errors';
import { Datetime } from '.';

export class CommonModel {
    @observable protected id_?: string;
    createTime_?: Datetime;
    updateTime_?: Datetime;

    set id(id: string | undefined) {
        if (this.id_) {
            throw new CommonModelError('Immutable id is already set');
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
