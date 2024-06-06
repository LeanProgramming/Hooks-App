import { useEffect, useReducer } from "react";
import { IState, IAction } from "../08-useReducer/types";
import { toDoReducer } from "../08-useReducer/toDoReducer";

export const useTodo = () => {

  const initialState: IState[] = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("toDos")!) || [];
  };

  const [toDos, dispatch] = useReducer(toDoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleNewTodo = (todo: IState) => {
    const action: IAction = {
      type: "[TODO] Add ToDo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todo: IState) => {
    dispatch({
      type: "[TODO] Remove ToDo",
      payload: todo,
    });
  };

  const handleToggleTodo = (todo: IState) => {
    dispatch({
      type: "[TODO] Toggle ToDo",
      payload: todo,
    });
  };

  const totalToDos = toDos.length;
  const pendingToDosCount = toDos.filter(todo => !todo.done).length;

  return {
    toDos,
    totalToDos,
    pendingToDosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
