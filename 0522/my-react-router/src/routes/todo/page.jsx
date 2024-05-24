import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "~/store/reducers/todo";

export default function TodoPage() {
  const todoInput = useRef();
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" ref={todoInput} />
      <button
        onClick={() => {
          const action = addTodo({
            todo: {
              text: todoInput.current.value,
            },
          });
          console.log(action);
          dispatch(action);
        }}
      >
        추가
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
