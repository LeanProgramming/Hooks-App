import { IState } from '../types';

interface IToDoItem {
    todo: IState;
    onDeleteTodo: (todo: IState) => void;
}

export const ToDoItem = ({todo, onDeleteTodo}:IToDoItem) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo)}
            >Borrar</button>
        </li>
    )
}