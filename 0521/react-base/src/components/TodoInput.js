import React, { useRef } from "react";
import { useAddTodoList } from "./useTodo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { createBoard } from "../apis/todo";

export default function TodoInput() {
  const { content, setText, setArr, color} = useAddTodoList();

  const inputRef = useRef();
  const submitInput = () => {
    setArr((arr) => [...arr, { content: content, backgroundColor: color }]);
    createBoard({content, color})
    setText("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          margin: "30px 0 0 0 ",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "40px" }}>Todo App</div>
        <InputGroup className="mb-3" style={{ width: "40%", margin: "0 auto" }}>
          <Form.Control
            placeholder="Todo를 입력하세요"
            aria-label="검색어"
            aria-describedby="basic-addon2"
            value={content}
            ref={inputRef}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{ backgroundColor: color }}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={submitInput}>
            입력
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
