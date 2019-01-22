import { StoreCoreError, ItemModelError } from '.';

export class UserStoreError extends StoreCoreError {
    name = 'UserStoreError';
}
export class UserModelError extends ItemModelError {
    name = 'UserModelError';
}

export class AskerStoreError extends UserStoreError {
    name = 'AskerStoreError';
}
export class AskerModelError extends UserModelError {
    name = 'AskerModelError';
}

export class RoleUserModelError extends UserModelError {
    name = 'RoleUserModelError';
}
