import { StoreCore, RootStore } from '.';
import { QuestionModel } from '../models';
import { QuestionStoreError } from '../errors';
import { action, runInAction } from 'mobx';
import { QuestionApi } from '../api';

export class QuestionStore extends StoreCore {
    ERROR = QuestionStoreError;

    constructor(rootStore: RootStore, private api: QuestionApi) {
        super(rootStore);
    }

    set questions(questions: QuestionModel[]) {
        this.items = questions;
    }

    get questions(): QuestionModel[] {
        return <QuestionModel[]>this.items;
    }

    @action
    async createOne(query: string): Promise<QuestionModel> {
        const question = await this.api.createOne(query);
        runInAction(() => {
            this.questions.push(question);
        });
        return question;
    }

    @action
    updateAttr(question: QuestionModel, name: string, value: any) {
        question.set(name, value).save();
    }

    @action
    async removeOne(question: QuestionModel) {
        await question.destroy();
        runInAction(() => {
            this.api.deleteOne(this.questions, question);
        });
    }

    @action
    async fetchAll() {
        const questions = await this.api.findAll();
        runInAction(() => {
            this.questions = questions;
        });
    }
}
