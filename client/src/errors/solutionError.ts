import { ItemError, ItemModelError, StoreCoreError } from '.';

export class SolutionError extends ItemError {
    name = 'SolutionError';
}
export class SolutionStoreError extends StoreCoreError {
    name = 'SolutionStoreError';
}
export class SolutionModelError extends ItemModelError {
    name = 'SolutionModelError';
}
