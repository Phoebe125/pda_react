const express = require("express");
const router = express.Router();

const Board = require("../models/Board");
const Comment = require("../models/Comment");

// 0. 전체 Comment 확인하는 함수
router.get("/", (req, res) => {
  Comment.find().then((result) => {
    res.json(result);
  });
});

// 1. Comment를 추가하는 함수를 만드시오
router.post("/", (req, res) => {
  Comment.create({
    content: req.body.content,
    author: req.body.author,
    board: req.body.board,
    tags: req.body.tags,
  }).then((result) => {
    res.status(201).json(result);
  });
});

// 2. Comment를 조회하는 함수를 만드시오
router.get("/:commentId", (req, res) => {
  Comment.findOne({ _id: req.params.commentId }).then((result) => {
    res.status(200).json(result);
  });
});

// 3. Comment를 수정하는 함수를 만드시오
router.put("/:commentId", (req, res) => {
  Comment.updateOne(
    { _id: req.params.commentId },
    {
      content: req.body.content,
      author: req.body.author,
      board: req.body.board,
      tags: req.body.tags,
    }
  ).then((result) => {
    res.status(200).json(result);
  });
});

// 4. Comment를 삭제하는 함수를 만드시오
router.delete("/:commentId", (req, res) => {
  Comment.deleteOne({ _id: req.params.commentId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
