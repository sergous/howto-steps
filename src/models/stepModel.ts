import { CommonModel, SolutionModel } from '.';
import { observable, action } from 'mobx';
import { StoreCore } from '../stores';

export class StepModel extends CommonModel {
    @observable private name_: string;
    @observable private description_: string;
    @observable private solutions_: SolutionModel[] = [];

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

    set solutions(solutions: SolutionModel[]) {
        this.solutions_ = solutions;
    }

    get solutions(): SolutionModel[] {
        return this.solutions_;
    }

    @action
    addSolution(solution: SolutionModel) {
        this.solutions_.push(solution);
    }

    @action
    removeSolution(solution: SolutionModel) {
        this.solutions_ = this.solutions_.filter(
            s => !!solution.id && s.id !== solution.id,
        );
    }
}
