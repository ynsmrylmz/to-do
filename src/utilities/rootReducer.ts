import { IBaseAction } from '../entities/IBaseAction';
import { BaseState, BaseStateFactory } from '../entities/IBaseState';

const initialState = BaseStateFactory();


export default function (state: BaseState = initialState, action: IBaseAction<any>): BaseState {
    return state;
}