import { createSpyObj } from '../utils';
import { QuestionApi } from '.';

export const createParseMobxMock = () =>
    createSpyObj('parseMobxSpy', ['toParseMobx', 'deleteListItem']);

export const createParseQueryMock = () =>
    createSpyObj('parseQuerySpy', ['find']);

export const createParseQuestionMock = () => ({
    set: jest.fn().mockReturnValue({
        save: jest.fn().mockReturnValue(Promise.resolve),
    }),
    destroy: jest.fn().mockReturnValue(Promise.resolve),
});

export const createParseMock = () => ({
    Query: jest.fn(),
    Object: {
        extend: jest.fn(),
    },
});

export const createQuestionApiMock = () => {
    const api = new QuestionApi();
    api.question = createParseQuestionMock();
    api.query = createParseQueryMock();
    api.parseMobx = createParseMobxMock();
    return api;
};
