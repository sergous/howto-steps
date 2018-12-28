import {
    UiStore,
    QuestionStore,
    SolutionStore,
    AnswerStore,
    StepStore,
} from '.';

export class RootStore {
    uiStore: UiStore;
    questionStore: QuestionStore;
    solutionStore: SolutionStore;
    answerStore: AnswerStore;
    stepStore: StepStore;

    constructor() {
        this.uiStore = new UiStore(this);
        this.questionStore = new QuestionStore(this);
        this.solutionStore = new SolutionStore(this);
        this.answerStore = new AnswerStore(this);
        this.stepStore = new StepStore(this);
    }
}
