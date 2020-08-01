export enum ReviewStatus {
    Pending,
    Assigned,
    Accepted,
    Rejected,
}

export enum PublishStatus {
    Proposed,
    Reviewing,
    Published,
}

export const publishStatusByReviewStatus = (
    reviewStatus: ReviewStatus,
): PublishStatus => {
    switch (reviewStatus) {
        case ReviewStatus.Pending:
            return PublishStatus.Proposed;
        case ReviewStatus.Assigned:
            return PublishStatus.Reviewing;
        case ReviewStatus.Rejected:
            return PublishStatus.Reviewing;
        case ReviewStatus.Accepted:
            return PublishStatus.Published;
    }
};

export const reviewStatusByPublishStatus = (
    publishStatus: PublishStatus,
): ReviewStatus => {
    switch (publishStatus) {
        case PublishStatus.Proposed:
        case PublishStatus.Reviewing:
            return ReviewStatus.Pending;
        case PublishStatus.Published:
            return ReviewStatus.Accepted;
    }
};

export class Status {
    static Review = ReviewStatus;
    static Publish = PublishStatus;

    static reviewByPublish = reviewStatusByPublishStatus;
    static publishByReview = publishStatusByReviewStatus;
}
