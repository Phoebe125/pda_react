### 프로디지털 아카데미 프론트 리액트 강의 (5/14)

### session Storage와 local Storage
- **sessionStorage**: 브라우저가 종료되면, 데이터가 날라감
- **localStorage**: 브라우저가 종료되어도 데이터가 날라가지 않음
- 둘다 데이터를 저장하는 저장소임
- 쿠키도 사용할 수 있음 (Client 단에서 요청을 보낼때, 쿠키 데이터도 함께 보냄)
- 개발자 도구 Application에서 확인할 수 있음

### Todo List 실습에서 추가하는 설명
- 다시 그릴지에 대해서는 Key값에 대해 우선적으로 본다
- `uuid`: div에 id를 사용하기 위해서
```jsx
import { v4 as uuidv4 } from "uuid";

const todos = [...todoList, {id: uuidv4(), text, color}]
```

### HOC
- 컴포넌트 로직 재사용 패턴!  
- Hook이 나온 이유로 잘 사용되지는 않지만, 유용할 때가 존재함.  
  - 컴포넌트에 props를 추가해주거나,  
  - 컴포넌트 랜더링 전에 어떤 로직을 처리하거나  
  - **특히 그 props를 추가해주거나 로직을 처리하는 것을 재사용할 때에!**
    
