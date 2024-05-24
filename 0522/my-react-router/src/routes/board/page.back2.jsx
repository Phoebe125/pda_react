import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBoardList } from "../../../lib/apis/board_answer";
import ListGroup from "react-bootstrap/ListGroup";

export function BoardListPage() {
  const location = useLocation();
  const [board, setBoard] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getBoardList().then((data) => {
      setBoard(data);
    });
  }, []);
  return (
    // <div>
    //   <Link to="/board/13"></Link>
    //   <div onClick={()=>{
    //     navigate(-1); // 뒤로 가기
    //   }}></div>
    // </div>
    <div>
      <h1>BoardList</h1>
      <ListGroup as="ol">
        {board &&
          board.map((elem, i) => (
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
    </div>
  );
}
