import { StoreCore } from '.';
import { StepModel } from '../models';
import { StepStoreError } from '../errors';

export class StepStore extends StoreCore {
    ERROR = StepStoreError;

    set steps(steps: StepModel[]) {
        this.items = steps;
    }

    get steps(): StepModel[] {
        return this.items;
    }
}
