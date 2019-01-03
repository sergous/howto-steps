import { StoreCoreError, CommonModelError } from '.';

export class AnswerStoreError extends StoreCoreError {
    name = 'AnswerStoreError';
}
export class AnswerModelError extends CommonModelError {
    name = 'AnswerModelError';
}
