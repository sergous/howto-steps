import { CommonError, CommonModelError } from './commonError';

export class SolutionError extends CommonError {}
export class SolutionStoreError extends SolutionError {}
export class SolutionModelError extends CommonModelError {}
