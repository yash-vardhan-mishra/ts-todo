import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/rootStore";
import { Todo } from "../store/todo/models/Todo";
import { boundRequestTodos } from "../store/todo/TodoActions";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(boundRequestTodos());
  }, [dispatch]);
  const todos = useSelector((state: AppState) => state.todoReducer.todos);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            key={todo.id}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
