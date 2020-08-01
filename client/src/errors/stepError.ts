import { ItemError, StoreCoreError, ItemModelError } from '.';

export class StepError extends ItemError {
    name = 'StepError';
}
export class StepModelError extends ItemModelError {
    name = 'StepModelError';
}
export class StepStoreError extends StoreCoreError {
    name = 'StepStoreError';
}
