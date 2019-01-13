import {
    UiStore,
    QuestionStore,
    SolutionStore,
    AnswerStore,
    StepStore,
    TagStore,
} from '.';
import { UserStore } from './userStore';

export class RootStore {
    uiStore: UiStore;
    questionStore: QuestionStore;
    solutionStore: SolutionStore;
    answerStore: AnswerStore;
    stepStore: StepStore;
    userStore: UserStore;
    tagStore: TagStore;

    constructor() {
        this.uiStore = new UiStore(this);
        this.questionStore = new QuestionStore(this);
        this.solutionStore = new SolutionStore(this);
        this.answerStore = new AnswerStore(this);
        this.stepStore = new StepStore(this);
        this.userStore = new UserStore(this);
        this.tagStore = new TagStore(this);
    }
}
