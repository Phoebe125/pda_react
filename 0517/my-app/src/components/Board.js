import React, { useCallback, useEffect, useState } from "react";
import { getBoard, deleteBoard } from "../apis/board";

export default function Board() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    getBoard().then((resp) => {
      setBoard(resp);
    });
  }, []);

  // 1. delete 작성한 코드
  function deleteItem(e) {
    const itemId = e.target.parentNode.id;
    deleteBoard(itemId).then((resp) => {
      setBoard(board.filter(board=>board._id!=itemId));
    });
  }

  // 2. delete 작성한 코드 (useCallback 사용해서)
  const removeBoard = useCallback(
    (boardId) => {
      deleteBoard(boardId).then((resp) => {
        setBoard(board.filter((board) => board._id != boardId));
      });
    },
    [board]
  );


return (
  <div>
    <h1>Board</h1>
    {board &&
      board.map((elem, i) => (
        <div key={i} id={elem._id}>
          <div>제목:{elem.title}</div>
          <div>내용: {elem.content}</div>
          <div>작성자: {elem.author}</div>
          <div>작성시간: {elem.createdAt}</div>
          <button onClick={() => removeBoard(elem._id)}>삭제하기</button>
          <button onClick={deleteItem}>삭제하기</button>
          <hr></hr>
        </div>))}
  </div>
  )
}
