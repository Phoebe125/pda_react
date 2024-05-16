import React from "react";
import Main from "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <div style={{ fontSize: "3rem", textAlign: "center", margin: "20px 0" }}>
        📌 BOARD
      </div>
      <Main/>
    </div>
  );
}

export default App;
