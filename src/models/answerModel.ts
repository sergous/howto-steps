import { StepModel, CommonModel, TagModel, ItemsModel } from '.';
import { action, observable } from 'mobx';
import { AnswerModelError } from '../errors';

export class AnswerModel extends CommonModel {
    steps = new ItemsModel();
    tags = new ItemsModel();

    ERROR = AnswerModelError;
}
