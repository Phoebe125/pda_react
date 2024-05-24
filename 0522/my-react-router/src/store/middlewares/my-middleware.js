// 미들웨어는 함수, 기본 형태 (store) => next => action => {}
const myMiddleware = (store) => (next) => (action) => {
  // store: redux store 자체
  console.log("dispatching...");
  console.log(store.getState());

  // next: 다음 미들웨어 = 함수
  // action: action 객체
  let result = next(action); // next 다 호출하면, reducer 호출, reducer 호출 완료하면, 그 이후 로직 실행
  console.log("next state");
  console.log(store.getState());
  return result;
};

function myMiddleware2(store) {
  return function (next) {
    return function (action) {
      let result = next(action);
    };
  };
}
export default myMiddleware;
