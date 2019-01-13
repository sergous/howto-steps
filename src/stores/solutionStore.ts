import { StoreCore } from '.';
import { SolutionModel } from '../models';
import { SolutionStoreError } from '../errors';

export class SolutionStore extends StoreCore {
    ERROR = SolutionStoreError;

    set solutions(solutions: SolutionModel[]) {
        this.items = solutions;
    }

    get solutions(): SolutionModel[] {
        return <SolutionModel[]>this.items;
    }
}
