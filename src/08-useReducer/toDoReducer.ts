import {IState, IAction} from './types'

export const toDoReducer = (initialState: IState[], action: IAction) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementado.');
        default:
            return initialState;
    }

    return initialState;
};