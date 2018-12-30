import {
    UiStore,
    QuestionStore,
    SolutionStore,
    AnswerStore,
    StepStore,
} from '.';
import { UserStore } from './userStore';

export class RootStore {
    uiStore: UiStore;
    questionStore: QuestionStore;
    solutionStore: SolutionStore;
    answerStore: AnswerStore;
    stepStore: StepStore;
    userStore: UserStore;

    constructor() {
        this.uiStore = new UiStore(this);
        this.questionStore = new QuestionStore(this);
        this.solutionStore = new SolutionStore(this);
        this.answerStore = new AnswerStore(this);
        this.stepStore = new StepStore(this);
        this.userStore = new UserStore(this);
    }
}
