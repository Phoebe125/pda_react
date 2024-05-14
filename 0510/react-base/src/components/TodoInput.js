import React, {useRef} from "react";
import { useAddTodoList } from "./useTodo";


export default function TodoInput() {
    const { text, setText, setArr, color, idx, setIdx } = useAddTodoList();

    const inputRef = useRef();
    const submitInput = () => {
        setArr((arr) => [...arr, {id: idx, text: text, backgroundColor: color}]);
        setIdx(prevIdx=>prevIdx+1);
        setText("");
    };
    
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          margin: "30px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "40px" }}>Todo App</div>
        <div>
          <input
            type="text"
            value={text}
            ref={inputRef}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{backgroundColor: color}}
          />
          <button onClick={submitInput}>입력</button>
        </div>
      </div>
    </div>
  );
}
