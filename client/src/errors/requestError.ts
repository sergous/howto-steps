import { ItemError, StoreCoreError, ItemModelError } from '.';

export class RequestError extends ItemError {
    name = 'RequestError';
}
export class RequestModelError extends ItemModelError {
    name = 'RequestModelError';
}
export class RequestStoreError extends StoreCoreError {
    name = 'RequestStoreError';
}
