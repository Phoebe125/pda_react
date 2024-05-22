import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBoard } from "../../../lib/apis/boards";
import ListGroup from "react-bootstrap/ListGroup";

export function BoardListPage() {
  const location = useLocation();
  const [board, setBoard] = useState();
  useEffect(() => {
    getBoard().then((resp) => setBoard(resp));
  }, []);
  // useNavigate: navigate 함수를 사용할 수 있게함.
  // navigate: 페이지 이동 함수
  const navigate = useNavigate();

  return (
    <div>
      <h1>My Board</h1>
      <p>boardPage</p>
      <ListGroup as="ol">
        {board &&
          board.map((elem, i) => (
            <ListGroup.Item
              key={i}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div
                className="ms-2 me-auto"
                onClick={() => {
                  navigate(`/board/${elem.id}`);
                }}
              >
                <div className="fw-bold">{elem.title}</div>
                <div>{elem.content}</div>
                <div>작성자: {elem.author}</div>
                <div>작성시간: {elem.createdAt}</div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </div>
    </div>
  );
}
