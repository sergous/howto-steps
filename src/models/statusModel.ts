import { ItemModel, PublishStatus, ReviewStatus, Status } from '.';
import { observable } from 'mobx';
import { StatusModelError } from '../errors';

export class StatusModel extends ItemModel {
    @observable private review_ = ReviewStatus.Pending;
    @observable private publish_ = PublishStatus.Proposed;

    ERROR = StatusModelError;

    set review(status: ReviewStatus) {
        this.review_ = status;
        this.publish_ = Status.publishByReview(status);
    }

    get review() {
        return this.review_;
    }

    set publish(status: PublishStatus) {
        this.publish_ = status;
        this.review_ = Status.reviewByPublish(status);
    }

    get publish() {
        return this.publish_;
    }
}
