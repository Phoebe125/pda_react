import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function postData(idx, body) {
  const url = `https://jsonplaceholder.typicode.com/posts/${idx}`;
  return axios
    .put(url, JSON.stringify(body), {
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    .then((response) => response.data);
}

export default function BoardItem({ elem, setDel, boardArr, setboardArr }) {
  const [update, setUpdate] = useState(false);
  const [updateTitle, setUpdateTitle] = useState();
  const [updateContent, setUpdateContent] = useState();
  const titleHeight = "2.5rem";
  const contentHeight = "170px";

  const deleteDiv = (e) => {
    const tmpArr = boardArr.filter(
      (item) =>
        parseInt(item.id) !==
        parseInt(e.target.parentNode.parentNode.id)
    );
    setDel(e.target.parentNode.id);
    setboardArr(tmpArr);
  };

  const updateDiv = (e) => {
    const title =
      e.target.parentNode.parentNode.querySelector(
        ".title"
      ).textContent;
    const content =
      e.target.parentNode.parentNode.querySelector(
        ".content"
      ).textContent;
    setUpdate(!update);
    setUpdateTitle(title);
    setUpdateContent(content);
  };

  const submitDiv = (e) => {
    const idx = parseInt(e.target.parentNode.parentNode.id);
    const userId = idx >= 10 ? Math.floor(idx / 10) + 1 : 1;
    const body = {
      id: idx,
      title: updateTitle,
      body: updateContent,
      userId: userId,
    };
    postData(idx, body)
      .then((responses) => {
        let tmpArr = [];
        for (let i = 0; i < boardArr.length; i++) {
          if (parseInt(boardArr[i].id) === idx) {
            tmpArr = [...tmpArr, responses];
          } else {
            tmpArr = [...tmpArr, boardArr[i]];
          }
        }
        setboardArr(tmpArr);
        setUpdate(!update);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return !update ? (
    <Card id={elem.id} style={{ width: "20rem" }}>
      <Card.Header>{elem.id}번째 게시글</Card.Header>
      <Card.Body>
        <Card.Title className="title">{elem.title}</Card.Title>
        <Card.Text className="content">{elem.body}</Card.Text>
      </Card.Body>
      <Card.Footer
        style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
      >
        <Button variant="outline-primary" onClick={deleteDiv}>
          삭제하기
        </Button>
        <Button variant="secondary" onClick={updateDiv}>
          수정하기
        </Button>
      </Card.Footer>
    </Card>
  ) : (
    <Card id={elem.id} style={{ width: "20rem" }}>
      <Card.Header>{elem.id}번째 게시글</Card.Header>
      <Card.Body>
        <Card.Title className="title">
          <input
            style={{ width: "100%", height: `${titleHeight}` }}
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
          ></input>
        </Card.Title>
        <Card.Text className="content">
          <textarea
            style={{ width: "100%", height: `${contentHeight}` }}
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
          ></textarea>
        </Card.Text>
      </Card.Body>
        <Card.Footer>
          <Button variant="secondary" onClick={submitDiv}>
            수정완료
          </Button>
        </Card.Footer>
    </Card>
  );
}
