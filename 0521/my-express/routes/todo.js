const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

// (/board) GET: 전체 게시글 조회
router.get("/", (req, res) => {
  Todo.find().then((result) => {
    res.json(result);
  });
});

// (/todo/:todoId) GET: <:todoId>에 해당하는 게시글 조회
router.get("/:todoId", (req, res) => {
  // url에서 <:todoId> 부분을 req.params라는 객체의 todoId 키로 조회
  Todo.findById(req.params.todoId)
    .populate("comments")
    .then((result) => {
      if (!result) {
        res.status(404).send();
      } else {
        trackBoard(req.session, result.content);
        res.json(result);
      }
    });
});

// (/todo) POST: 게시글 추가
router.post("/", (req, res) => {
  Todo.create({
    content: req.body.content,
    backgroundColor: req.body.backgroundColor
  }).then((result) => {
    res.status(201).json(result);
  });
});

// (/todo) PUT : <:todoId>에 해당하는 게시글 수정
router.put("/:todoId", (req, res) => {
  Todo.updateOne(
    { _id: req.params.todoId },
    {
      content: req.body.content,
      backgroundColor: req.body.backgroundColor,
    }
  ).then((result) => {
    res.status(200).json(result);
  });
});

// (/todo) DELETE : <:boardId>에 해당하는 게시글 삭제
router.delete("/:todoId", (req, res) => {
  Todo.deleteOne({ _id: req.params.todoId }).then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
