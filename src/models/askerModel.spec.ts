import { AskerModel, QuestionModel, UserData, SolutionModel } from '.';
import { RoleUserModelError, ItemsModelError } from '../errors';

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

    it('should set ERROR', () => {
        expect(asker.ERROR).toBe(RoleUserModelError);
    });

    it('should create new asker', () => {
        expect(asker.name).toBe(askerData.name);
        expect(asker.email).toBe(askerData.email);
        expect(asker.role).toBe(AskerModel.ROLE.Asker);
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
            asker.askQuestion(question);
        });

        describe('findQuestion', () => {
            it('should find question', () => {
                expect(asker.questions.findOne(question)).toBeDefined();
            });
            it('should not find question', () => {
                expect(asker.questions.findOne(question2)).toBeUndefined();
            });
        });

        describe('ask question', () => {
            it('should ask new question', () => {
                expect(asker.questions.items).toContain(question);
            });
            it('should not ask same question', () => {
                const ask2 = () => asker.askQuestion(question);
                expect(ask2).toThrowError(ItemsModelError);
            });
            it('should not have not asked question', () => {
                const newQuestion = new QuestionModel('How to push?');
                expect(asker.questions).not.toContain(newQuestion);
            });
        });

        describe('accept solution', () => {
            let solution: SolutionModel;
            beforeEach(() => {
                solution = new SolutionModel();
            });
            it('should not accept solution for unknown question', () => {
                const accept = () => asker.acceptSolution(solution);
                expect(accept).toThrowError(ItemsModelError);
            });
            it('should accept solution for existing question', () => {
                solution.question = question;
                asker.acceptSolution(solution);
                expect(asker.questions.items).not.toContain(question);
                expect(asker.solutions.items).toContain(solution);
            });
        });

        describe('remove question', () => {
            it('should remove question', () => {
                asker.questions.remove(question);
                expect(asker.questions).not.toContain(question);
            });
            xit('should not remove question', () => {
                const unknownQuestion = new QuestionModel();
                const remove = () => asker.questions.remove(unknownQuestion);
                // TODO(sergous): Handle not existing
                expect(remove).toThrowError(RoleUserModelError);
                expect(asker.questions.items).toContain(question);
            });
        });

        describe('with solution', () => {
            let solution: SolutionModel;
            let solution2: SolutionModel;

            beforeEach(() => {
                solution = new SolutionModel();
                solution.question = question;
                asker.acceptSolution(solution);

                solution2 = new SolutionModel();
            });

            it('should have solution', () => {
                expect(asker.solutions.items).toContain(solution);
            });

            describe('remove solution', () => {
                it('should remove soluton', () => {
                    asker.solutions.remove(solution);
                    expect(asker.solutions).not.toContain(solution);
                });
                xit('should not remove solution', () => {
                    const remove = () => asker.solutions.remove(solution2);
                    expect(remove).toThrowError(RoleUserModelError);
                    expect(asker.questions.items).toContain(question);
                });
            });

            describe('findSolution', () => {
                it('should find solution', () => {
                    expect(asker.solutions.findOne(solution)).toBeDefined();
                });
                it('should not find solution', () => {
                    expect(asker.solutions.findOne(solution2)).toBeUndefined();
                });
            });
        });
    });
});
