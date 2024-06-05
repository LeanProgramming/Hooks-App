const initialState = [
  {
    id: 1,
    toDo: "Recolectar la piedra del Alma",
    done: false,
  },
];

interface IState {
  id: number;
  toDo: string;
  done: boolean;
}

interface IAction {
  type: string;
  payload: IState;
}

const toDoReducer = (state: IState[] = initialState, action?: IAction) => {
  if (action?.type === "[TODO] add toDo") {
    return [...state, action.payload];
  }

  return state;
};

let toDos = toDoReducer();

const newToDo = {
  id: 2,
  toDo: "Recolectar la piedra del Poder",
  done: false,
};

const addToDoAction = {
  type: "[TODO] add toDo",
  payload: newToDo,
};

toDos = toDoReducer(toDos, addToDoAction);

console.log({ state: toDos });
