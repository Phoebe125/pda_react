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