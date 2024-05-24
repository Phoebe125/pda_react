import { setColor } from "../store/reducers/counter";
import { useDispatch } from "react-redux";

export default function ColorInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="color"
        onChange={(e) => {
          const color = e.target.value;
          const action = setColor({ color }); // 주문서
          //   주문서 제출
          dispatch(action);
        }}
      />
    </div>
  );
}
