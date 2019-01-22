export class ItemError extends Error {
    name = 'ItemError';
}

export class ItemModelError extends ItemError {
    name = 'ItemModelError';
}

export class ItemsError extends ItemError {
    name = 'ItemsError';
}

export class ItemsModelError extends ItemsError {
    name = 'ItemsModelError';
}
