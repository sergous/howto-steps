import { AskerModel, QuestionModel, UserData, SolutionModel } from '.';
import { AskerModelError } from '../errors';

const askerData: UserData = {
    id: 'askerId',
    name: 'Asker Name',
    email: 'asker@host.com',
};

describe('askerModel', () => {
    let asker: AskerModel;
    let question: QuestionModel;
    let question2: QuestionModel;
    beforeEach(() => {
        asker = new AskerModel(askerData);
        question = new QuestionModel('How to push?');
        question2 = new QuestionModel('How to pull?');
        question.id = 'questionId';
    });

    it('should create new asker', () => {
        expect(asker.toJSON()).toEqual({
            ...askerData,
            role: AskerModel.ROLE.Asker,
        });
    });

    describe('with question', () => {
        beforeEach(() => {
            asker.ask(question);
        });

        describe('findQuestion', () => {
            it('should find question', () => {
                expect(asker.findQuestion(question)).toBeDefined();
            });
            it('should not find question', () => {
                expect(asker.findQuestion(question2)).toBeUndefined();
            });
        });

        describe('ask question', () => {
            it('should ask new question', () => {
                expect(asker.questions).toContain(question);
            });
            it('should not ask same question', () => {
                const ask2 = () => asker.ask(question);
                expect(ask2).toThrowError(AskerModelError);
            });
            it('should not have not asked question', () => {
                const newQuestion = new QuestionModel('How to push?');
                expect(asker.questions).not.toContain(newQuestion);
            });
        });

        describe('resolve question', () => {
            let solution: SolutionModel;
            beforeEach(() => {
                solution = new SolutionModel();
            });
            it('should not resolve unknown question', () => {
                const resolve = () => asker.resolve(solution);
                expect(resolve).toThrowError(AskerModelError);
            });
            it('should resolve existing question', () => {
                solution.question = question;
                asker.resolve(solution);
                expect(asker.questions).not.toContain(question);
            });
        });
    });
});
