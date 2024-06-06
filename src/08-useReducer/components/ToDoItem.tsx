import { IState } from '../types';

interface IToDoItem {
    todo: IState;
    onDeleteTodo: (todo: IState) => void;
    onToggleTodo: (todo: IState) => void;
}

export const ToDoItem = ({ todo, onDeleteTodo, onToggleTodo }: IToDoItem) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                onClick={ () => onToggleTodo(todo) }
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo)}
            >Borrar</button>
        </li>
    )
}
