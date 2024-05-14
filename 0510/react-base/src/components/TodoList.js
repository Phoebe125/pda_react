import React from "react";
import TodoItem from "./TodoItem";
import { useTodoList } from "./useTodo";

export default function TodoList({search}) {
  const { arr } = useTodoList();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        marginBottom: "40px",
        width: "500px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "30px", marginBottom: "20px" }}>Todo Items</div>

      {arr?.map((elem, i) =>
        !search || search === elem.text ? (
          <TodoItem elem={elem} key={i}/>
        ) : null,
      )}
    </div>
  );
}
