const express = require("express");
const router = express.Router();

const Board = require("../models/Board");

router.get("/", (req, res) => {
    // 데이터 삽입 방법 1
//   const board = new Board({
//     title: "제목1",
//     content: "내용1",
//     author: "작성자1",
//   });
//   board.save().then((result) => {
//     console.log(result);
//     res.json(result);
//   });

// 데이터 삽입 방법 2
  Board.create({
    title: "제목2",
    content: "내용2",
    author: "작성자2",
  }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
