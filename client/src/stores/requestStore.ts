import { StoreCore } from '.';
import { QuestionRequestModel } from '../models';
import { RequestStoreError } from '../errors';

export class RequestStore extends StoreCore {
    ERROR = RequestStoreError;

    set questionRequests(questionRequests: QuestionRequestModel[]) {
        this.items = questionRequests;
    }

    get questionRequests(): QuestionRequestModel[] {
        return this.items;
    }
}
