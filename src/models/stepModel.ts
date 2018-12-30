import { CommonModel } from '.';

export class StepModel extends CommonModel {
    private name_: string;
    private description_: string;

    constructor(name: string, description: string = '') {
        super();
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
