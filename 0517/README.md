### 프로디지털 아카데미 프론트 리액트 강의 (5/17)

### 어제 수업 복습
- express 
  - method와 상관없이 모든 요청을 받겠다: `router.all`


### 몽고 디비
- models 폴더 만듦
- models 폴더 안에 다음과 같이 스키마 정의
```jsx
const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
```


```jsx
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sun:<password>@cluster0.lmbrrnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected Successful"))
  .catch((err) => console.log(err));
```
- 하고 보면, 몽고디비에 스키마가 만들어진 것을 볼 수 있음! 
- 토큰 .env 파일로 빼는 방법: <a href="https://velog.io/@iamhayoung/dotenv%EB%9E%80-Node.jsExpress%EC%97%90%EC%84%9C-dotenv%EB%A1%9C-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0">https://velog.io/@iamhayoung/dotenv%EB%9E%80-Node.jsExpress%EC%97%90%EC%84%9C-dotenv%EB%A1%9C-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0</a>


### 몽고 디비 사용하기
1. router에서 데이터 추가
  - 방법 1
```jsx
const board = new Board({
    title: "제목1",
    content: "내용1",
    author: "작성자1",
  });
  board.save().then(result=>{
    console.log(result);
    res.json(result);
  })
```
  - 여기서 `board.save()` 한 객체는 프로미스 객체 이므로, .then 코드 필요함

  - 방법2
```jsx
Board.create({
    title: "제목2",
    content: "내용2",
    author: "작성자2",
  }).then((result) => {
    res.json(result);
  });
```

2. inser 여러개
```jsx
  Board.insertMany([
    {
      title: "제목3",
      content: "내용3",
      author: "작성자1",
    },
    {
      title: "제목4",
      content: "내용4",
      author: "작성자1",
    },
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
```

3. 데이터 조회
```jsx
Board.find().then(data=>{
        res.json(data);
    })
```
  - find 안에 아무런 조건을 주지 않으면, 전체 데이터를 조회한다.

```jsx
Board.findOne().then(data=>{
        res.json(data);
    })
```
  - 오직 한개만 반환하는 경우

4. 데이터 조회에 조건 걸기
```jsx
Board.find({author: "작성자1"}).then(data=>{
        res.json(data);
    })
```
  - author가 작성자1인 모든 데이터를 가지고 오기

```jsx
Board.findById('6646a1ab07c1304fc44544d6').then(data=>{
        res.json(data);
    })
```
  - 고유의 id 값으로 불러오기

  