import React, {useRef} from "react";

export default function TodoInput({text, setText, setArr, color, idx, setIdx}) {
    const inputRef = useRef();
    const submitInput = () => {
        setArr((arr) => [...arr, {id: idx, text: text, backgroundColor: color}]);
        setIdx(prevIdx=>prevIdx+1);
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
