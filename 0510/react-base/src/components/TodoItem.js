import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import useTodo from "./useTodo";

export default function TodoItem({ elem, arr, setArr }) {
  const [update, setUpdate] = useState(false);
  const [updateContext, setUpdateContext] = useState("");
  const [updateId, setUpdateId] = useState(0);
  const [updateColor, setUpdateColor ] = useState("");
  const updateRef = useRef();
  
  const deleteTodo = (e) => {
    const tmpArr = arr.filter(
      (item) => parseInt(item.id) !== parseInt(e.currentTarget.parentNode.id)
    );
    setArr((arr) => tmpArr);
  };

  const updateTodo = (e) => {
    const tmp =e.target.parentNode.querySelector("span").textContent;
    setUpdateId((prevId) => parseInt(e.target.parentNode.id));
    setUpdate((prevState) => !prevState);
    setUpdateContext((prevUpdate) => tmp);
    setUpdateColor(prevColor=>e.target.parentNode.style.backgroundColor)
  };

  const submitUpdate = (e) => {
    setUpdate((prevState) => !prevState);

    setArr((arr) => {
      const newArr = [];

      for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].id) === parseInt(updateId)) {
          newArr.push({
            id: updateId,
            text: updateContext,
            backgroundColor: updateColor,
          });
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    });
  };

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
      <Button variant="outline-dark" onClick={deleteTodo}>
        삭제
      </Button>
    </div>
  );
}
