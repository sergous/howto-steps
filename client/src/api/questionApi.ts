import Parse from 'parse';
import { ParseMobx } from 'parse-mobx';
import { action } from 'mobx';
import { QuestionModel } from '../models';

const QUESTION = 'Question';

export class QuestionApi {
    question: any;
    query: any;

    constructor(public parse: any = Parse, public parseMobx: any = ParseMobx) {
        this.query = new parse.Query(QUESTION);
        this.question = new parse.Object.extend(QUESTION);
    }

    @action
    async createOne(query: string) {
        const question = await this.question.set('query', query).save();
        return this.parseMobx.toParseMobx(question);
    }

    @action
    async updateOneAttr(question: QuestionModel, name: string, value: any) {
        return await question.set(name, value).save();
    }

    @action
    async deleteOne(question: QuestionModel) {
        return await question.destroy();
    }

    @action
    async deleteListItem(questions: QuestionModel[], question: QuestionModel) {
        await this.parseMobx.deleteListItem(questions, question);
    }

    @action
    async findAll() {
        const questions = await this.query.find();
        return this.parseMobx.toParseMobx(questions);
    }
}
