export interface IState {
  id: number;
  description: string;
  done: boolean;
}

export interface IAction {
  type: string;
  payload: IState;
}
