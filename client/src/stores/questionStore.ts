import { StoreCore } from '.';
import { QuestionModel } from '../models';
import { QuestionStoreError } from '../errors';
import { observable, action, computed, runInAction } from 'mobx';

const Parse = require('parse');
const { ParseMobx } = require('parse-mobx');

const QUESTION = 'Question';

const Question = Parse.Object.extend(QUESTION);

export class QuestionStore extends StoreCore {
    ERROR = QuestionStoreError;

    set questions(questions: QuestionModel[]) {
        this.items = questions;
    }

    get questions(): QuestionModel[] {
        return <QuestionModel[]>this.items;
    }

    @action
    async createOne(query: string): Promise<QuestionModel> {
        const question = await new Question().set('query', query).save();
        runInAction(() => {
            this.questions.push(ParseMobx.toParseMobx(question));
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
            ParseMobx.deleteListItem(this.questions, question);
        });
    }

    @action
    async fetchAll() {
        const questions = await this.findAll();
        runInAction(() => {
            this.questions = ParseMobx.toParseMobx(questions);
        });
    }

    @action
    async findAll() {
        return await new Parse.Query(QUESTION).find();
    }
}
