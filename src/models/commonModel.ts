import { observable } from 'mobx';
import { CommonModelError } from '../errors';

export class CommonModel {
    @observable protected id_?: string;
    set id(id: string | undefined) {
        if (this.id_) {
            throw new CommonModelError('Immutable id is already set');
        }
        this.id_ = id;
    }
    get id() {
        return this.id_;
    }
}
