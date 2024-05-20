### 프로디지털 아카데미 프론트 리액트 강의 (5/20)
- React에서 node.js와 express로 만든 Board를 조회해 보자
- 아마 CORS 에러가 발생할 텐데, 이를 잘 찾아서 해결해보자

- 현재 3000 포트로 node.js (백엔드 서버)가 돌아가고
- 3001 포트로 react (프론트엔드 서버)가 돌아가고 있음

### CORS 설정하는 방법
- **CORS 에러란?**
  - CORS: Cross Origin Resource Share
  - 데이터 교환을 할 때, 서로 다른 Origin 을 가지고 있으면 함부로 통신하면 안된다!
  - CORS 정책은 일단 Origin이 다르면 데이터 통신을 막는다.
  - 일반적으로 개발환경에서는 React 개발 서버와 백엔드 서버가 다른 포트에서 실행되는 경우가 많다. -> 이 경우, CORS 문제가 발생할 수 있다!
  - 따라서 필요한 경우 데이터를 보내 주는 서버에서 CORS를 허용해줘야한다!
  - CORS를 해결해주는 미들웨어를 추가해주거나 프록시 서버를 사용하면 됨!

**[해결방법]**
1. cors 미들웨어 설치
- `npm i cors`
- 백엔드에서 app.js에 다음 코드 추가
```jsx
var cors = require("cors");
app.use(cors());
```

2. proxy 서버 설정
- 프로덕션 환경에서는 서로 다른 도메인에 호스팅된 애플리케이션과 API를 분리하여 배포할 수 있으며, 웹 서버나 클라우드 서비스를 사용하여 리버스 프록시를 설정할 수 있다!
- express 백엔드에서 app.js에 다음 코드 추가
```jsx
const port = 3002;
app.listen(port, ()=>console.log(`listening on port ${port}!`))
```
- react의 package.json에 다음 코드 추가
```json
  "proxy":"http://localhost:3002"
```
- 아래와 같이 axios 요청을 보내면, 잘 불러와진다!
```jsx
export function getBoard() {
  const url = "/board";
  const output = axios.get(url).then((response) => response.data);
  return output;
}
```
