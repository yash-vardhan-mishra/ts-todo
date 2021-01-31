import { Todo } from "./models/Todo";
import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  TodoActionTypes,
} from "./models/actions";
interface TodoState {
  loading: boolean;
  todos: Todo[];
  error: string;
}

const defaultState: TodoState = {
  loading: false,
  todos: [],
  error: "",
};

export const todoReducer = (
  state = defaultState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { loading: true, todos: [], error: "" };
    case FETCH_TODOS_SUCCESS:
      return { loading: false, todos: action.todos, error: "" };
    case FETCH_TODOS_FAILURE:
      return { loading: false, todos: [], error: action.error };
    default:
      return state;
  }
};
