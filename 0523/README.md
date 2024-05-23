### 프로디지털 아카데미 프론트 리액트 강의 (5/23)

### Redux
- 전역 상태관리 라이브러리가 필요
- 왜 상태 관리 라이브러리가 필요한가?
    - 자바스크립트 (SPA)이 복잡해짐 -> 많은 상태를 자바스크립트 코드로 관리할 필요가 생김! (서버응답, 캐시 데이터, local state, Active Router, Selected Tab, Loading Visiual...)

### React에서의 상태 관리
- 어떻게 상태를 전달하는가?
1. Props 전달: 상위 컴포넌트에서 하위 컴포넌트로 props를 통해 상태를 내려보낸다.
2. Callback 함수: 하위 컴포넌트에서 상태를 변경할 필요가 있을 경우, 상위 컴포넌트에서 변경을 위한 함수를 props로 전달한다.

- 불편한 점
1. Props 드릴링
2. 데이터 일관성
3. 재사용성


### Redux 설치
- `npm install redux`
- `npm install react-redux`

### Redux의 세가지 원칙
1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

### Redux의 구성 요소 - State
1. State - 상태
  - React의 상태는?? 어떤 정보를 들고 있다.
  - 우리가 원하는 것! 
  - Application이 커질수록 이 State 관리가 어려워짐
  -> 관리를 잘 하도록 만들자!

2. Action
  - Action은 상태를 변경시켜달라는 주문서!
  - type과 payload (데이터)를 함께 전달한다.

3. Reducer
  - action을 받아 실제적으로 state를 변경하는 로직을 작성하는 함수!
  - State와 action을 연결하기 위한 함수!
  - State와 action을 인자로 받아 다음 state를 return하는 함수! 

### Action
- Action은 주문서다
    - type과 payload 두 key로 구성되어있다.
- Action Type 정의
```jsx
export const INCREASE_COUNTER = "counter /INCREASE_COUNTER";
export const DECREASE_COUNTER = "counter /DECREASE_COUNTER";
export const SET_COLOR = "counter /SET_COLOR";
```
- Action Creator 정의 (Action (주문서)를 만드는 함수)
- return type은 액션 객체임
```jsx
export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
  payload: {},
});
```
