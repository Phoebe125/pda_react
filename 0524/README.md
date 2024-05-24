### 프로디지털 아카데미 프론트 리액트 강의 (5/24)

### react toolkit 사용

- redux toolkit 설치:  
  `npm install @reduxjs/toolkit`

### redux middleware 사용하기

- middleware 컨셉은 서버에서의 미들웨어 혹은 axios의 interceptor와 같아
- Redux의 미들웨어
  - Action을 보내는 순간부터 스토어에 도착하는 순간까지
- redux toolkit에는 기본적인 미들웨어가 존재한다.
  - redux-thunk: redux내에서 비동기 로직을 작성할 수 있게 해줌
  - serializableStateInvariant
- 새로운 미들웨어를 설치하여 사용해보자
  - redux-logger
  - 어떤 action이 발생했는지를 console에 찍어주는 녀석들이다.