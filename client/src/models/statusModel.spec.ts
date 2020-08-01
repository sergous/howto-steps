import { ReviewStatus, PublishStatus, StatusModel } from '.';

describe('StatusModel', () => {
    let status: StatusModel;

    beforeEach(() => {
        status = new StatusModel();
    });
    it('should set default review status', () => {
        expect(status.review).toBe(ReviewStatus.Pending);
    });

    it('should set defualt publish status', () => {
        expect(status.publish).toBe(PublishStatus.Proposed);
    });

    it('should set review status', () => {
        status.review = ReviewStatus.Accepted;
        expect(status.review).toBe(ReviewStatus.Accepted);
        expect(status.publish).toBe(PublishStatus.Published);
    });

    it('should set publish status', () => {
        status.publish = PublishStatus.Reviewing;
        expect(status.publish).toBe(PublishStatus.Reviewing);
        expect(status.review).toBe(ReviewStatus.Pending);
    });
});
