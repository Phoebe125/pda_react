import React, { useEffect, useState } from "react";
import { getBoard } from "../apis/board";

export default function Board() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    getBoard().then((resp) => {
      setBoard(resp);
    });
  }, []);

  return (
    <div>
      <h1>Board</h1>
      {board &&
        board.map((elem, i) => (
          <div key={i}>
            <div>제목:{elem.title}</div>
            <div>내용: {elem.content}</div>
            <div>작성자: {elem.author}</div>
            <div>작성시간: {elem.createdAt}</div>
            <hr></hr>
          </div>
        ))}
    </div>
  );
}
