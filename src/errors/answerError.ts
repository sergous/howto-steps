import { StoreCoreError, ItemModelError } from '.';

export class AnswerStoreError extends StoreCoreError {
    name = 'AnswerStoreError';
}
export class AnswerModelError extends ItemModelError {
    name = 'AnswerModelError';
}
