import React, { useState } from "react";
import Main from "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [writeMode, setWriteMode] = useState(true);

  function switchMode(){
    setWriteMode(prev=>!prev);
  }

  return (
    <div>
      <div style={{ fontSize: "3rem", textAlign: "center", margin: "20px 0" }}>
        📌 BOARD
        <Button variant="outline-info" onClick={switchMode} style={{marginLeft:"4rem"}}>새로운 글 작성하기</Button>
      </div>
      <Main writeMode={writeMode} setWriteMode={setWriteMode}/>
    </div>
  );
}

export default App;
