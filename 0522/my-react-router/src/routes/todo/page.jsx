import { createNextState } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, addTodo } from "~/store/reducers/todo";

export default function TodoPage() {
  const todoInput = useRef();
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [cancelTodo, setCancelTodo] = useState(null);

  return (
    <div>
      <input type="text" ref={todoInput} />
      {cancelTodo && <button onClick={cancelTodo}>취소</button>}
      <button
        onClick={() => {
          const action = addTodo({
            todo: {
              text: todoInput.current.value,
            },
          });
          action.meta = {
            delay: 3000,
          };
          const cancelFn = dispatch(action);
          console.log(cancelFn);
          setCancelTodo((prev) => {
            return () => {
              cancelFn();
              setCancelTodo(null);
            };
          });
        }}
      >
        추가
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                const action = removeTodo({
                  todoId: todo.id,
                });
                console.log(action);
                dispatch(action);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
