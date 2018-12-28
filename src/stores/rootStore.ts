import { UiStore, QuestionStore, SolutionStore } from '.';

export class RootStore {
    uiStore: UiStore;
    questionStore: QuestionStore;
    solutionStore: SolutionStore;

    constructor() {
        this.uiStore = new UiStore(this);
        this.questionStore = new QuestionStore(this);
        this.solutionStore = new SolutionStore(this);
    }
}
