import React from "react";
import BoardItem from "./BoardItem";
import Row from 'react-bootstrap/Row';

export default function BoardList({boardArr, del, setDel, setboardArr}) {
  return (
      <Row xs={1} md={2} className="g-1" style={{justifyContent:"center", gap: "1rem"}}>
        {boardArr?.map((elem, i) => <BoardItem key={i} elem={elem} setDel={setDel} boardArr={boardArr} setboardArr={setboardArr}/>)}
      </Row>
  );
}
