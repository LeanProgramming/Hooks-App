import { ToDoList, ToDoAdd } from './components/';
import { useTodo } from '../hooks';


export const ToDoApp = () => {

    const { toDos, totalToDos, pendingToDosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()

    return (
        <>
            <h1>ToDoApp</h1>
            <hr />
            <h2>
                Total de tareas: {totalToDos} -
                <small>
                    Tareas pendientes: {pendingToDosCount}
                </small>
            </h2>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ToDoList
                        toDos={toDos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <ToDoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
