import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBoardList } from "../../../lib/apis/board_answer";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "../../store/reducers/board";

export function BoardListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { boards: boardList, loading } = useSelector((state) => state.board);

  const dispatch = useDispatch();
  useEffect(() => {
    const action = fetchBoardList();
    console.log("action", action);
    dispatch(action);
  }, [dispatch]);

  return (
    <div>
      <h1>BoardList</h1>
      {loading === "pending" && <div>로딩중...</div>}
      {loading === "fulfilled" && (
        <ListGroup as="ol">
          {boardList &&
            boardList.map((elem, i) => (
              <ListGroup.Item
                onClick={() => {
                  navigate(`/board/${elem.id}`);
                }}
                style={{ cursor: "pointer" }}
                key={i}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{elem.title}</div>
                  <div>{elem.content}</div>
                  <div>작성자: {elem.author}</div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
      {loading === "rejected" && <div>에러 발생</div>}
    </div>
  );
}
