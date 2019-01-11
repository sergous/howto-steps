import { AskerModel, QuestionModel, UserData, SolutionModel } from '.';
import { AskerModelError, RoleUserModelError, StoreCoreError } from '../errors';
import { StoreCore } from '../stores';

describe('askerModel', () => {
    let asker: AskerModel;
    let question: QuestionModel;
    let question2: QuestionModel;
    let askerData: UserData;

    beforeEach(() => {
        askerData = {
            name: 'Asker Name',
            email: 'asker@host.com',
        };
        asker = new AskerModel(askerData);
        question = new QuestionModel('How to push?');
        question2 = new QuestionModel('How to pull?');
        question.id = 'questionId';
    });

    it('should create new asker', () => {
        expect(asker.toObject()).toEqual({
            ...askerData,
        });
    });

    it('should have asker role', () => {
        expect(asker.role).toBe(AskerModel.ROLE.Asker);
    });

    it('should not change role', () => {
        const updateRole = () => (asker.role = AskerModel.ROLE.Adviser);
        expect(updateRole).toThrowError(RoleUserModelError);
    });

    describe('init with role', () => {
        it('should accept valid role', () => {
            askerData.role = AskerModel.ROLE.Asker;
            asker = new AskerModel(askerData);
            expect(asker.role).toBe(AskerModel.ROLE.Asker);
        });

        it('should change invalid role', () => {
            askerData.role = AskerModel.ROLE.Adviser;
            asker = new AskerModel(askerData);
            expect(asker.role).toBe(AskerModel.ROLE.Asker);
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
                expect(asker.solutions).toContain(solution);
            });
        });

        describe('remove question', () => {
            it('should remove question', () => {
                asker.removeQuestion(question);
                expect(asker.questions).not.toContain(question);
            });
            it('should not remove question', () => {
                const unknownQuestion = new QuestionModel();
                const remove = () => asker.removeQuestion(unknownQuestion);
                expect(remove).toThrowError(AskerModelError);
                expect(asker.questions).toContain(question);
            });
        });

        describe('with solution', () => {
            let solution: SolutionModel;
            let solution2: SolutionModel;

            beforeEach(() => {
                solution = new SolutionModel();
                solution.id = StoreCore.uniqId;
                solution.question = question;
                asker.resolve(solution);

                solution2 = new SolutionModel();
            });

            it('should have solution', () => {
                expect(asker.solutions).toContain(solution);
            });

            describe('remove solution', () => {
                it('should remove soluton', () => {
                    asker.removeSolution(solution);
                    expect(asker.solutions).not.toContain(solution);
                });
                it('should not remove solution', () => {
                    const remove = () => asker.removeSolution(solution2);
                    expect(remove).toThrowError(AskerModelError);
                });
            });

            describe('findSolution', () => {
                it('should find solution', () => {
                    expect(asker.findSolution(solution)).toBeDefined();
                });
                it('should not find solution', () => {
                    expect(asker.findSolution(solution2)).toBeUndefined();
                });
            });
        });
    });
});
