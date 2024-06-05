import { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import {IState, IAction} from './types'

const initialState: IState[] = [
    {
        id: new Date().getDate(),
        description: 'Recolectar la piedra del Alma.',
        done: false,
    },
    {
        id: new Date().getDate(),
        description: 'Recolectar la piedra del Poder.',
        done: false,
    }
];


export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, initialState);

    return (
        <>
            <h1>ToDoApp</h1>

            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}
