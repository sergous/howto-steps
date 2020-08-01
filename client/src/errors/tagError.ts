import { ItemError, StoreCoreError, ItemModelError } from '.';

export class TagError extends ItemError {
    name = 'TagError';
}
export class TagModelError extends ItemModelError {
    name = 'TagModelError';
}
export class TagStoreError extends StoreCoreError {
    name = 'TagStoreError';
}
