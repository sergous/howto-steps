import { ItemError, ItemModelError } from '.';

export class StatusError extends ItemError {
    name = 'StatusError';
}

export class StatusModelError extends ItemModelError {
    name = 'StatusModelError';
}
