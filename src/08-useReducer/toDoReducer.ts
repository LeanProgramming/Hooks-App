import {IState, IAction} from './types'

export const toDoReducer = (initialState: IState[], action: IAction) => {

    switch (action.type) {
        case '[TODO] Add ToDo':
            return [ ...initialState, action.payload ];
        case '[TODO] Remove ToDo':
            return initialState.filter( toDo => toDo.id !== action.payload.id);
        default:
            return initialState;
    }

    return initialState;
};