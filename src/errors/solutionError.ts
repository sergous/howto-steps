import { CommonError, CommonModelError, StoreCoreError } from '.';

export class SolutionError extends CommonError {
    name = 'SolutionError';
}
export class SolutionStoreError extends StoreCoreError {
    name = 'SolutionStoreError';
}
export class SolutionModelError extends CommonModelError {
    name = 'SolutionModelError';
}
