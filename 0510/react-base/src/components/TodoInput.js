import React, { useRef } from "react";
import { useAddTodoList } from "./useTodo";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";

export default function TodoInput() {
  const { text, setText, setArr, color, idx, setIdx } = useAddTodoList();

  const inputRef = useRef();
  const submitInput = () => {
    setArr((arr) => [...arr, { id: idx, text: text, backgroundColor: color }]);
    setIdx((prevIdx) => prevIdx + 1);
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
          justifyContent:"center",
        }}
      >
        <div style={{ fontSize: "40px"}}>Todo App</div>
        <InputGroup className="mb-3" style={{width: "40%", margin: "0 auto"}}>
          <Form.Control
            placeholder="Todo를 입력하세요"
            aria-label="검색어"
            aria-describedby="basic-addon2"
            value={text}
            ref={inputRef}
            onChange={(e)=>{
              setText(e.target.value)
            }}
            style={{backgroundColor: color}}
          />
          <Button variant="outline-secondary" id="button-addon2"  onClick={submitInput}>
            입력
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
