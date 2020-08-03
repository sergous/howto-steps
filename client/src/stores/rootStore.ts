import {
    UiStore,
    QuestionStore,
    SolutionStore,
    AnswerStore,
    StepStore,
    TagStore,
    RequestStore,
} from '.';
import { UserStore } from './userStore';
import { QuestionApi } from '../api';

export class RootStore {
    uiStore: UiStore;
    questionStore: QuestionStore;
    solutionStore: SolutionStore;
    answerStore: AnswerStore;
    stepStore: StepStore;
    userStore: UserStore;
    tagStore: TagStore;
    requestStore: RequestStore;

    constructor() {
        this.uiStore = new UiStore(this);
        this.questionStore = new QuestionStore(this, new QuestionApi());
        this.solutionStore = new SolutionStore(this);
        this.answerStore = new AnswerStore(this);
        this.stepStore = new StepStore(this);
        this.userStore = new UserStore(this);
        this.tagStore = new TagStore(this);
        this.requestStore = new RequestStore(this);
    }
}
