import { ToDoItem } from "./ToDoItem"
import { IState } from "../types";

interface IToDoList {
    toDos: IState[];
    onDeleteTodo: (todo: IState) => void;
    onToggleTodo: (todo: IState) => void;
}

export const ToDoList = ({ toDos = [], onDeleteTodo, onToggleTodo }: IToDoList) => {
    return (

        <ul className="list-group">
            {
                toDos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }

        </ul>

    )
}
