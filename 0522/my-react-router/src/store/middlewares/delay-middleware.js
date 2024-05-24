/**
 * action 객체에서 meta라는 값의 delay의 따라 delay만큼 지연시켰다가 next를 호출하는 미들웨어
 */

const delayMiddleware = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  let intervalId = setTimeout(() => next(action), action.meta.delay);

  return function cancel() {
    clearInterval(intervalId);
  };
};

export default delayMiddleware;
