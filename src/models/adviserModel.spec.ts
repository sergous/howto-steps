import { QuestionModel } from './questionModel';
import { AdviserModel, SolutionModel } from '.';
import { UserData } from '.';
import { RoleUserModelError, ItemsModelError } from '../errors';

describe('adviserModel', () => {
    let adviser: AdviserModel;
    let question: QuestionModel;
    let advisorData: UserData;

    beforeEach(() => {
        advisorData = {
            name: 'Advisor Name',
            email: 'advisor@host.com',
        };
        adviser = new AdviserModel(advisorData);
        question = new QuestionModel('How many miles in one kilometer');
        question.id = 'questionId';
    });

    it('should set ERROR', () => {
        expect(adviser.ERROR).toBe(RoleUserModelError);
    });

    describe('init with role', () => {
        it('should accept valid role', () => {
            advisorData.role = AdviserModel.ROLE.Adviser;
            adviser = new AdviserModel(advisorData);
            expect(adviser.role).toBe(AdviserModel.ROLE.Adviser);
        });

        it('should change invalid role', () => {
            advisorData.role = AdviserModel.ROLE.Asker;
            adviser = new AdviserModel(advisorData);
            expect(adviser.role).toBe(AdviserModel.ROLE.Adviser);
        });
    });

    it('should answer new question', () => {
        adviser.assignQuestion(question);
        expect(adviser.questions.items).toContain(question);
    });

    it('should have adviser role', () => {
        expect(adviser.role).toBe(AdviserModel.ROLE.Adviser);
    });

    it('should not change role', () => {
        const updateRole = () => (adviser.role = AdviserModel.ROLE.Asker);
        expect(updateRole).toThrowError(RoleUserModelError);
    });

    describe('with question', () => {
        beforeEach(() => {
            adviser.assignQuestion(question);
        });

        describe('assign question', () => {
            it('should assign new question', () => {
                expect(adviser.questions.items).toContain(question);
            });
            it('should not assign same question', () => {
                const assign2 = () => adviser.assignQuestion(question);
                expect(assign2).toThrowError(ItemsModelError);
            });
            it('should not have not assigned question', () => {
                const newQuestion = new QuestionModel('How to push?');
                expect(adviser.questions).not.toContain(newQuestion);
            });
        });

        describe('advise solution', () => {
            let solution: SolutionModel;
            beforeEach(() => {
                solution = new SolutionModel();
            });
            it('should not advise solution for unknown question', () => {
                const advise = () => adviser.adviseSolution(solution);
                expect(advise).toThrowError(ItemsModelError);
            });
            it('should advise solution for existing question', () => {
                solution.question = question;
                adviser.adviseSolution(solution);
                expect(adviser.questions.items).not.toContain(question);
                expect(adviser.solutions.items).toContain(solution);
            });
        });
    });
});
