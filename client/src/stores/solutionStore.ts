import { StoreCore } from '.';
import { SolutionModel, QuestionModel } from '../models';
import { SolutionStoreError } from '../errors';
import { observable, computed, action } from 'mobx';

export class SolutionStore extends StoreCore {
    ERROR = SolutionStoreError;

    @observable solutionQuery = '';

    set solutions(solutions: SolutionModel[]) {
        this.items = solutions;
    }

    get solutions(): SolutionModel[] {
        return <SolutionModel[]>this.items;
    }

    @action
    readonly search = (query: string) => {
        this.solutionQuery = query;
    };

    @computed
    get foundSolutions() {
        return this.solutions.filter((s: SolutionModel) =>
            s.isQuestionContains(this.solutionQuery)
        );
    }

    async createFromQuery() {
        const solution = new SolutionModel();
        solution.question = await this.rootStore.questionStore.createOne(
            this.solutionQuery
        );
        this.add(solution);
    }
}
