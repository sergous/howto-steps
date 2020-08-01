import { ItemModel, ItemsModel } from '.';
import { AnswerModelError } from '../errors';

export class AnswerModel extends ItemModel {
    steps = new ItemsModel();
    tags = new ItemsModel();

    ERROR = AnswerModelError;
}
