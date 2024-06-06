import { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { IState, IAction } from './types'
import { ToDoList, ToDoAdd } from './components/';

const initialState: IState[] = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma.',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del Poder.',
    //     done: false,
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')!)  || [];
}


export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);

    const handleNewTodo = (todo: IState) => {
        const action: IAction = {
            type: '[TODO] Add ToDo',
            payload: todo
        }

        dispatch( action );
    }

    const handleRemoveTodo = (todo: IState) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: todo,
        });
    }

    return (
        <>
            <h1>ToDoApp: 10, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={toDos} onDeleteTodo={handleRemoveTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <ToDoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}
