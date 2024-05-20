const express = require("express");
const router = express.Router();

const Board = require("../models/Board");

// (/board) GET: 전체 게시글 조회
router.get("/", (req, res) => {
  Board.find().then((result) => {
    res.json(result);
  });
});

// (/board/:boardId) GET: <:boardId>에 해당하는 게시글 조회
router.get("/:boardId", (req, res) => {
  // url에서 <:boardId> 부분을 req.params라는 객체의 boardId 키로 조회
  Board.findById(req.params.boardId)
    .populate("comments")
    .then((result) => {
      if (!result) {
        res.status(404).send();
      }
      else{
        res.json(result);
      }
    });
});

// (/board) POST: 게시글 추가
router.post("/", (req, res) => {
  Board.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  }).then((result) => {
    res.status(201).json(result);
  });
});

// (/board) PUT : <:boardId>에 해당하는 게시글 수정
router.put("/:boardId", (req, res) => {
  Board.updateOne(
    { _id: req.params.boardId },
    {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    }
  ).then((result) => {
    res.status(200).json(result);
  });
});

// (/board) DELETE : <:boardId>에 해당하는 게시글 삭제
router.delete("/:boardId", (req, res) => {
  Board.deleteOne({ _id: req.params.boardId }).then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
