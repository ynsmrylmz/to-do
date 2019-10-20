import { Record } from 'immutable'

export interface IBaseState {

}

export type BaseState = Record<IBaseState> & Readonly<IBaseState>;

export const BaseStateFactory = Record<IBaseState>({

});