import { ItemError, StoreCoreError, ItemModelError } from '.';

export class QuestionError extends ItemError {
    name = 'QuestionError';
}
export class QuestionModelError extends ItemModelError {
    name = 'QuestionModelError';
}
export class QuestionStoreError extends StoreCoreError {
    name = 'QuestionStoreError';
}
