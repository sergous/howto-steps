import { StoreCoreError, ItemModelError } from '.';

export class UserStoreError extends StoreCoreError {
    name = 'UserStoreError';
}
export class UserModelError extends ItemModelError {
    name = 'UserModelError';
}

export class RoleUserModelError extends UserModelError {
    name = 'RoleUserModelError';
}
