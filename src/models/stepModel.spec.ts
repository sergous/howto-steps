import { StepModel } from '.';

describe('stepModel', () => {
    let step: StepModel;
    let name: string;
    let description: string;

    beforeEach(() => {
        name = 'Prepare for give thing';
        description = 'Some info about thing preparation';
        step = new StepModel(name, description);
    });

    it('should have name', () => {
        expect(step.name).toBe(name);
    });

    it('should have description', () => {
        expect(step.description).toBe(description);
    });
});
