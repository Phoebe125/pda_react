// selector
// dispatch
// actionCreator
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  setColor,
} from "~/store/reducers/counter";

export default function CounterPage() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>CounterPage</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={(e) => {
            // action 생성 = 주문서 생성
            // = {type: 증가하는 주문, payload: 주문에 전달할 데이터}
            const action = increaseCounter();
            // dispatch: action을 dispatch 하는 함수
            // = 주문서를 제출하는 함수
            dispatch(action);
          }}
        >
          증가
        </button>
        <button
          onClick={(e) => {
            // action 생성 = 주문서 생성
            const action = decreaseCounter();
            dispatch(action);
          }}
        >
          감소
        </button>
      </div>

      <div>
        <h3 style={{ color: counter.color }}>{counter.counter}</h3>
      </div>
    </div>
  );
}
