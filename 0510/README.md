### 프로디지털 아카데미 프론트 리액트 강의 (5/10)


### 어제 수업 복습
- `npx create-react-app <app 이름>`: 리액트 앱 시작  
- scripts: npm run ~~ 가 가능하도록 해주는 명령어  
- `Hook`: 클래스 컴포넌트에서 이용하던 코드를 작성할 필요 없이 함수형 컴포넌트에서 다양한 기능을 사용할 수 있게 만들어준 라이브러리라고 할 수 있음
  - `useState`: 상태를 관리하는 훅
  - `useEffect`: 기존 클래스형 컴포넌트에서 사용했던 componentDidMount, componentDidUpdate, componentWillUnmount를 하나의 API로 통합한 것이다. 
- 부모 컴포넌트 -> 자식 컴포넌트로 전달: props, 자식에서 사용만 가능하고, 변경이 불가능함
- 만일 변경이 필요하다면, 상태를 변경하는 함수를 전달해야 한다.
- 반대 방향인 자식 -> 부모 컴포넌트로 전달은 불가능함

### useRef()
- 변경 가능한 ref 객체 설정
- 컴포넌트에서 특정 DOM을 선택할 때, `ref`를 사용해야한다.
- 이를 설정하기 위해 `useRef`를 사용하여 설정한다. 

### useMEmo(callBackFunc, deps:Array)
- 값을 메모이제이션 (Memoization - 잠깐 저장)

### useCallback(callBackFunc, deps:Array):
- 함수를 정의하는 것도 비용이다! 함수 정의도 dependency가 변경될 때에만 재정의
하도록