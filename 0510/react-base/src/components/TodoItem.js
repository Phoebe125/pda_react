import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default function TodoItem({ elem, arr, setArr }) {
  const [update, setUpdate] = useState(false);
  const [updateContext, setUpdateContext] = useState("");
  const [updateId, setUpdateId] = useState(0);
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
    setUpdateContext((prevUpdate) => tmp)
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
            backgroundColor: elem.backgroundColor,
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
        padding: "10px",
        width: "500px",
        backgroundColor: elem.backgroundColor,
      }}
    >
      <span>{elem.text}</span>
      <Button variant="primary" onClick={updateTodo}>
        수정
      </Button>
      <Button variant="primary" onClick={deleteTodo}>
        삭제
      </Button>
    </div>
  );
}
