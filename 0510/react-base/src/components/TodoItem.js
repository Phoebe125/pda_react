import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {useRemoveTodo, useUpdateTodo} from "./useTodo";

export default function TodoItem({ elem }) {
  const removeTodo = useRemoveTodo();  
  const {update, updateContext, setUpdateContext, updateTodo, submitUpdate} = useUpdateTodo();
  const updateRef = useRef();

  return update ? (
    <div
      style={{
        padding: "10px",
        width: "500px",
        backgroundColor: elem.backgroundColor,
      }}
    >
      <input
        type="text"
        value={updateContext}
        ref={updateRef}
        onChange={(e) => {
          setUpdateContext(e.target.value);
        }}
      />
      <button onClick={submitUpdate}>수정완료</button>
    </div>
  ) : (
    <div
      id={elem.id}
      style={{
        display: "flex",
        padding: "10px",
        width: "500px",
        backgroundColor: elem.backgroundColor,
        lineHeight:"100%",
      }}
    >
      <span style={{display:"flex", alignItems: "center", margin:"0 auto", lineHeight:"100%"}}>{elem.text}</span>
      <Button style={{margin:"0 10px"}} variant="outline-dark" onClick={updateTodo}>
        수정
      </Button>
      <Button variant="outline-dark" onClick={(e)=>removeTodo(e)}>
        삭제
      </Button>
    </div>
  );
}
