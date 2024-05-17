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
  //   Board.create({
  //     title: "제목2",
  //     content: "내용2",
  //     author: "작성자2",
  //   }).then((result) => {
  //     res.json(result);
  //   });

  // 데이터 삽입 방법 3 - 여러개
//   Board.insertMany([
//     {
//       title: "제목3",
//       content: "내용3",
//       author: "작성자1",
//     },
//     {
//       title: "제목4",
//       content: "내용4",
//       author: "작성자1",
//     },
//   ])
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// 데이터 조회
    // Board.find().then(data=>{
    //     res.json(data);
    // });
// 데이터 1개 조회
    // Board.findOne().then(data=>{
    //     res.json(data);
    // })

// 데이터 filter
    // Board.find({author: "작성자1"}).then(data=>{
    //     res.json(data);
    // })

    Board.findById('6646a1ab07c1304fc44544d6').then(data=>{
        res.json(data);
    })
});


module.exports = router;
