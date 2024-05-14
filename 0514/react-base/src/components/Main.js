import React, { useState, useEffect } from "react";
import BoardList from "./BoardList";
import InputItem from "./InputItem";
import axios from "axios";

function getData(idx) {
  const url = `https://jsonplaceholder.typicode.com/posts/${idx}`;
  return axios.get(url).then((response) => response.data); // 데이터를 반환하도록 수정
}

export default function Main({ writeMode, setWriteMode }) {
  const [del, setDel] = useState("");
  const [boardArr, setboardArr] = useState([]);

  useEffect(() => {
    Promise.all(
      Array(100)
        .fill()
        .map((_, i) => i + 1)
        .map((elem) => getData(elem))
    )
      .then((responses) => {
        setboardArr(responses);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return !writeMode ? (
    <div>
      <InputItem boardArr={boardArr} setboardArr={setboardArr} setWriteMode={setWriteMode}/>
    </div>
  ) : (
    <div>
      <BoardList
        boardArr={boardArr}
        del={del}
        setDel={setDel}
        setboardArr={setboardArr}
      />
    </div>
  );
}
