import { StoreCore } from '.';
import { TagModel } from '../models';

export class TagStore extends StoreCore {
    set tags(tags: TagModel[]) {
        this.items = tags;
    }

    get tags(): TagModel[] {
        return <TagModel[]>this.items;
    }
}
