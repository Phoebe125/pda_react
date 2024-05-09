### 프로디지털 아카데미 프론트 리액트 강의 (5/9)

### React란?

- UI를 개발하는데 도움을 주는 라이브러리
- 공식 문서: <a href="https://react.dev/">https://react.dev/</a>
- **선언형 (Declarative)**: Interactive한 UI를 만드는데 도움을 준다. data가 변경되면 효율적으로 컴포넌트를 업데이트 한다.

```jsx
function RenderCookie() {
  return (
    <div>
      <h1>Chocolate Cookie</h1>
    </div>
  );
}
```

- **컴포넌트 기반 (Component-Based)**: 스스로 상태를 관리하는 캡슐화된 컴포넌트를 조합해 복잡한 UI를 만든다.

```jsx
import React, { Component } from "react";
export default class RenderCookie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>RenderCookie</div>;
  }
}
```

- **props**를 받아서 **ui**를 반환


### react-create-app
- node_modules: 의존성 패키지
- public/*: 공유하는 파일, 기본적인 static files
- src/*: 실제 code
- package.json: 프로젝트 (application)의 정체성

### react app의 디렉토리 구조
### package.json
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
- 실행하려면: `npm run start`, `npm run build`

### jsx
- Javascript XML  
- Element 만드는 것을 직관적으로 이해하도록 도와주는 문법  
- 만일 JSX를 사용하지 않으면, 코드를 일일히 적어야 해서 가독성이 안좋고, 비용이 증가한다.  

### ./src  
#### 1. index.js  
- `<React.StrictMode>` : 디버깅 용  
- `<App>` : App.js에 있는 App() 호출  

#### 2. App.js
- 결국 이도 javascript인 것에 주의!
  - Ex. html 속성으로 class 사용 못하고 className 으로 써야한다.
  - Ex2. src도 url로 못쓰고, {} 사용해서 묶어서 가져와야 함
- **변수 사용**: {변수명} - {} 안에는 객체가 전달된다!

#### index.css  
- 기본 css, Default이다.  

### 컴포넌트
- **컴포넌트**: 화면을 나타내는 기본 단위
- 컴포넌트 이름은 대문자로 시작하는 게 관례이다!

### Props롸 State
- **Props (Properties)**: 부모 컴포넌트로 전달받는 파라미터!
- 컴포넌트를 재사용이 가능하도록 하는 핵심!
- 컴포넌트가 생성될 때 부모로부터 전달 받음
- 컴포넌트 자체에서 변화시킬 수 없음

- **State**
- State는 Props와 다르게 컴포넌트 자체적으로 가지고 있는 것.
- 컴포넌트 내에서 저장되고 유저의 이벤트나 시간에 따라 변화시킬 수 있는 값
- 초기화가 반드시 필요.
  - `this.state={}`
  - `useState()`