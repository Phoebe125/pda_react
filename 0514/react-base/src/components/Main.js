import React, { useState, useEffect } from "react";
import BoardList from "./BoardList";
import InputItem from "./InputItem";
import { getPosts } from "../apis/posts";
import Button from "react-bootstrap/Button";

export default function Main() {
  const [del, setDel] = useState("");
  const [boardArr, setboardArr] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
  };

  useEffect(() => {
    Promise.all(
      Array(100)
        .fill()
        .map((_, i) => i + 1)
        .map((elem) => getPosts(elem))
    )
      .then((responses) => {
        setboardArr(responses);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Button
        variant="outline-secondary"
        onClick={handleShow}
        style={{
          display: "block",
          position: "relative",
          left: "80%",
          margin: "15px",
        }}
      >
        새로운 글 작성하기
      </Button>
      <InputItem
        show={show}
        boardArr={boardArr}
        setboardArr={setboardArr}
        handleClose={handleClose}
      />
      <div>
        <BoardList
          boardArr={boardArr}
          del={del}
          setDel={setDel}
          setboardArr={setboardArr}
        />
      </div>
    </div>
  );
}
