import { StoreCore } from '.';
import { TagModel } from '../models';
import { TagStoreError } from '../errors';

export class TagStore extends StoreCore {
    ERROR = TagStoreError;

    set tags(tags: TagModel[]) {
        this.items = tags;
    }

    get tags(): TagModel[] {
        return <TagModel[]>this.items;
    }
}
