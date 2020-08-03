import Parse from 'parse';
import ParseMobx from 'parse-mobx';
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
    async deleteOne(questions: QuestionModel[], question: QuestionModel) {
        await ParseMobx.deleteListItem(questions, question);
    }

    @action
    async findAll() {
        const questions = await new Parse.Query(QUESTION).find();
        return ParseMobx.toParseMobx(questions);
    }
}
