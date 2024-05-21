import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { deleteBoard } from "../apis/todo";

export default function TodoItem({ arr, setArr, elem }) {
  const updateRef = useRef();
  function removeTodo(e) {
    deleteBoard(e.target.parentNode.id);
    const tmpArr = arr.filter((item) => item._id !== e.currentTarget.parentNode.id);
    setArr((arr) => tmpArr);
  }

  return (
    <div
      id={elem._id}
      style={{
        display: "flex",
        padding: "10px",
        width: "500px",
        backgroundColor: elem.backgroundColor,
        lineHeight: "100%",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", margin: "0 auto", lineHeight: "100%" }}>
        {elem.content}
      </span>
      <Button variant="outline-dark" onClick={(e) => removeTodo(e)}>
        삭제
      </Button>
    </div>
  );
}
