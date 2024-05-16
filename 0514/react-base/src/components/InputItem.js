import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { putPosts } from "../apis/posts";
import Modal from "react-bootstrap/Modal";

export default function InputItem({
  show,
  boardArr,
  setboardArr,
  handleClose,
}) {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  function submitItem() {
    const idx = boardArr[boardArr.length - 1].id;
    const userId = idx >= 10 ? Math.floor(idx / 10) + 1 : 1;
    const body = { title: newTitle, body: newContent, userId: userId };
    putPosts(body).then((resp) => {
      setboardArr((prev) => [...prev, resp]);
      setNewTitle("");
      setNewContent("");
      handleClose();
    });
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>새로운 글 작성하기</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <input
          style={{
            border: "solid 0.1px lightgray",
            borderRadius: "10px",
            width: "75%",
            height: "3rem",
            margin: "15px",
            marginBottom: "10px",
            padding: "10px",
          }}
          type="text"
          value={newTitle}
          placeholder="제목을 입력하세요"
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
        <textarea
          style={{
            border: "solid 0.1px lightgray",
            borderRadius: "10px",
            width: "75%",
            height: "300px",
            margin: "15px",
            padding: "10px",
          }}
          value={newContent}
          placeholder="내용을 입력하세요"
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={submitItem}>
          작성 완료
        </Button>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
