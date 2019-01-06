import { QuestionModel } from './questionModel';
import { AdviserModel } from '.';
import { UserData } from '.';
import { RoleUserModelError } from '../errors';

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
        adviser.answer(question);
        expect(adviser.questions).toContain(question);
    });

    it('should have adviser role', () => {
        expect(adviser.role).toBe(AdviserModel.ROLE.Adviser);
    });

    it('should not change role', () => {
        const updateRole = () => (adviser.role = AdviserModel.ROLE.Asker);
        expect(updateRole).toThrowError(RoleUserModelError);
    });
});
