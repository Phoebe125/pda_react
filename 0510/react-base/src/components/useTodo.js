import { useState } from "react";

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id != id));
  };

  const editTodo = (updateContext) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === updateContext.id) {
          return { ...todo, updateContext };
        }
      })
    );

    return {
        todoList,
        addTodo,
        removeTodo,
        editTodo
    }
  };
}
