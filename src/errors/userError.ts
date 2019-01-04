import { StoreCoreError, CommonModelError } from '.';

export class UserStoreError extends StoreCoreError {
    name = 'UserStoreError';
}
export class UserModelError extends CommonModelError {
    name = 'UserModelError';
}

export class AskerStoreError extends UserStoreError {
    name = 'AskerStoreError';
}
export class AskerModelError extends UserModelError {
    name = 'AskerModelError';
}
