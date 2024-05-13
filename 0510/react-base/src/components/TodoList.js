import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ arr, search, setArr, text, setText }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "40px auto",
        width: "500px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "30px", marginBottom: "20px" }}>Todo Items</div>

      {arr.map((elem, i) =>
        !search || search === elem.text ? (
          <TodoItem elem={elem} key={elem.id} arr={arr} setArr={setArr} text={text} setText={setText} />
        ) : null,
      )}
    </div>
  );
}
