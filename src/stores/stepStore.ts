import { StoreCore } from '.';
import { StepModel } from '../models';

export class StepStore extends StoreCore {
    set steps(steps: StepModel[]) {
        this.items = steps;
    }

    get steps(): StepModel[] {
        return this.items;
    }
}
