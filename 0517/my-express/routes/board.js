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

  // Board.findById('6646a1ab07c1304fc44544d6').then(data=>{
  //     res.json(data);
  // })

  // 데이터 삭제
  // Board.deleteOne({title: "제목4"}).then(result=>{
  //     res.json(result);
  // })
  // Board.deleteMany({author: "작성자1"}).then(result=>{
  //     res.json(result);
  // })

  // 데이터 업데이트
  //   Board.updateOne({ title: "제목2" }, { content: "내용2 수정" }).then(
  //     (result) => {
  //       res.json(result);
  //     }
  //   );

  // Board.updateMany({author:"작성자1"}, {author:"작성자3"}).then((data=>{
  //     res.json(data);
  // }))

  // createdAt 삭제하고, timestamp 생성할때
  // Board.create({
  //   title: "제목6",
  //   content: "내용6",
  //   author: "작성자3",
  // }).then((result) => {
  //   res.json(result);
  // });

  // num에 숫자 아무거나 넣어서 3개 정도만 만들기
  // Board.insertMany([
  //   {
  //     title: "연습1",
  //     content: "내용1",
  //     author: "이선민",
  //     num: 1
  //   },
  //   {
  //     title: "연습2",
  //     content: "내용2",
  //     author: "이선민",
  //     num: 3
  //   },
  //   {
  //     title: "연습3",
  //     content: "내용3",
  //     author: "이선민",
  //     num: 5
  //   }
  // ])
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // Board에서 num이 2보다 큰 (greater than) 데이터 조회
  // Board.find(
  //   { 
  //     num: {
  //       $gte: 1
  //     } 
  //   }).then((result) => {
  //   res.json(result);
  // });

  // Board에서 num이 5보다 작은 (less than: lt) 데이터 조회
  Board.find(
    { 
      num: {
        $lte: 5
      } 
    }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
