### 프로디지털 아카데미 프론트 리액트 강의 (5/9)

### React란?

- UI를 개발하는데 도움을 주는 라이브러리
- 공식 문서: <a href="https://react.dev/">https://react.dev/</a>
- 선언형 (Declarative): Interactive한 UI를 만드는데 도움을 준다. data가 변경되면 효율적으로 컴포넌트를 업데이트 한다.
```jsx
function RenderCookie() {
return (
    <div>
        <h1>Chocolate Cookie</h1>
    </div>
)}
```

- 컴포넌트 기반 (Component-Based): 스스로 상태를 관리하는 캡슐화된 컴포넌트를 조합해 복잡한 UI를 만든다.  
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
