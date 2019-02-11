import { StoreCore } from '.';
import { SolutionModel } from '../models';
import { SolutionStoreError } from '../errors';
import { observable, computed } from 'mobx';

export class SolutionStore extends StoreCore {
    ERROR = SolutionStoreError;

    @observable solutionQuery = '';

    set solutions(solutions: SolutionModel[]) {
        this.items = solutions;
    }

    get solutions(): SolutionModel[] {
        return <SolutionModel[]>this.items;
    }

    readonly search = (query: string) => {
        this.solutionQuery = query;
    };

    @computed
    get foundSolutions() {
        return this.solutions.filter(
            (s: SolutionModel) =>
                s.isQuestionContains(this.solutionQuery),
        );
    }
}
