import React from "react";

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h2>TodoApp</h2>
      <div>
        <input type="text" />
      </div>
      <div>color~</div>

      <div>
        <h4>Todo Items</h4>
      </div>
    </div>
  );
}
