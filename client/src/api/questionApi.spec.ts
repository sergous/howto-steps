import { createQuestionApiMock } from '.';

describe('QuestionApi', () => {
    let api: any;

    beforeEach(() => {
        api = createQuestionApiMock();
    });

    it('should create question', async () => {
        const query = 'new query';

        await api.createOne(query);

        expect(api.question.set).toHaveBeenCalled();
        expect(api.parseMobx.toParseMobx).toHaveBeenCalled();
    });

    it("should update one quistion's attribute", () => {
        api.updateOneAttr(api.question, 'query', 'new query');

        expect(api.question.set).toHaveBeenCalled();
    });

    it('should delete one question', () => {
        api.deleteOne(api.question);

        expect(api.question.destroy).toHaveBeenCalled();
    });

    it('should delete questions list item', () => {
        api.deleteListItem([api.question], api.question);

        expect(api.parseMobx.deleteListItem).toHaveBeenCalled();
    });

    it('should find all questions', async () => {
        await api.findAll();

        expect(api.query.find).toHaveBeenCalled();
        expect(api.parseMobx.toParseMobx).toHaveBeenCalled();
    });
});
