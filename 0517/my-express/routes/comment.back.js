const express = require("express");
const router = express.Router();

const Board = require("../models/Board");
const Comment = require("../models/Comment");

router.get("/", (req, res) => {
  // Board 연동
  //   Comment.create({
  //     content: "다섯글자 이상 댓글입니다22",
  //     author: "작성자3",
  //     tags: ["Love", "Science"],
  //     board: "6646b43a556a5b19e33d7d26", // ObjectId를 상수로써 구성해서 가져와야 함
  //   })
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // Board 객체 전달
  // Board.findOne().then(board=>{
  //     Comment.create({
  //         content: "새로운 댓글입니다.",
  //         author: "sys",
  //         board: board
  //     }).then(result=>{
  //         res.json(result)
  //     })
  // })
  // 참조하고 있는 애들을 그대로 가져와서 객체로 만들래 -> populated
  //   Comment.find()
  //     .populate("board")
  //     .then((result) => {
  //       res.json(result);
  //     });  
});

module.exports = router;
