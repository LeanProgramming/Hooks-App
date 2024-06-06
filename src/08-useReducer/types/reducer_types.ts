export interface IState {
  id: number;
  description: string | undefined;
  done: boolean;
}

export interface IAction {
  type: string;
  payload: IState;
}
