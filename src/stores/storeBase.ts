import uniqid from 'uniqid';

export class StoreBase {
    get newId(): string {
        return uniqid();
    }
}
