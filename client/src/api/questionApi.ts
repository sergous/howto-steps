import Parse from 'parse';
import { ParseMobx } from 'parse-mobx';
import { action } from 'mobx';
import { QuestionModel } from '../models';

const QUESTION = 'Question';

export const Question = Parse.Object.extend(QUESTION);

export class QuestionApi {
    @action
    async createOne(query: string) {
        const question = await new Question().set('query', query).save();
        return ParseMobx.toParseMobx(question);
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
        await ParseMobx.deleteListItem(questions, question);
    }

    @action
    async findAll() {
        const questions = await new Parse.Query(QUESTION).find();
        return ParseMobx.toParseMobx(questions);
    }
}
