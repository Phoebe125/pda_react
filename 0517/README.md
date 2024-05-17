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
board.save().then((result) => {
  console.log(result);
  res.json(result);
});
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
Board.find().then((data) => {
  res.json(data);
});
```

- find 안에 아무런 조건을 주지 않으면, 전체 데이터를 조회한다.

```jsx
Board.findOne().then((data) => {
  res.json(data);
});
```

- 오직 한개만 반환하는 경우

4. 데이터 조회에 조건 걸기

```jsx
Board.find({ author: "작성자1" }).then((data) => {
  res.json(data);
});
```

- author가 작성자1인 모든 데이터를 가지고 오기

```jsx
Board.findById("6646a1ab07c1304fc44544d6").then((data) => {
  res.json(data);
});
```

- 고유의 id 값으로 불러오기

```jsx
Board.find({
  num: {
    $gt: 2,
  },
}).then((result) => {
  res.json(result);
});
```

- num 이 2보다 큰 데이터

5. 데이터 삭제

```jsx
Board.deleteOne({ title: "제목4" }).then((result) => {
  res.json(result);
});
```

- 제목이 제목4인 데이터 하나만 삭제

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

- 이런식으로 response가 온다.

```jsx
Board.deleteMany({ author: "작성자1" }).then((result) => {
  res.json(result);
});
```

- 조건에 부합하는 데이터들을 삭제

6. 데이터 업데이트

```jsx
Board.updateOne({ title: "제목2" }, { content: "내용2 수정" }).then(
  (result) => {
    res.json(result);
  }
);
```

```jsx
Board.updateMany({ author: "작성자1" }, { author: "작성자3" }).then((data) => {
  res.json(data);
});
```

- 여러개 업데이트

### MongoDB

- Join 개념이 없도다!!!!
- relation을 갖는 것 보다 참고하다고 보는게 좋음
- Foriegn key라고 생각하는게 좋다.
- 참조 키는 \_id만 가능!
- Join 연산이 많아지게 되면, 속도가 느려져서 일부러 중복을 허용하기도 함
- 방법 1

```jsx
Board.findOne().then((board) => {
  Comment.create({
    content: "새로운 댓글입니다.",
    author: "sys",
    board: board,
  }).then((result) => {
    res.json(result);
  });
});
```

- 방법 2

```jsx
Comment.create({
  content: "다섯글자 이상 댓글입니다22",
  author: "작성자3",
  tags: ["Love", "Science"],
  board: "6646b43a556a5b19e33d7d26", // ObjectId를 상수로써 구성해서 가져와야 함
})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

- 참조하는 객체 정보를 보고싶어! (left outer join 느낌)

```jsx
// 참조하고 있는 애들을 그대로 가져와서 객체로 만들래 -> populated
Comment.find()
  .populate("board")
  .then((result) => {
    res.json(result);
  });
```

### MongoDB 공식 문서

<a href="https://mongoosejs.com/">https://mongoosejs.com/</a>
