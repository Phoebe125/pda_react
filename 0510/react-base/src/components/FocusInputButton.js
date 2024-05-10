import React, { useRef } from "react";

export default function FocusInputButton() {
  const inputRef = useRef(); // 접근 가능한 지역적인 변수로 생각하면 좋음

  const focusInput = () => {
    console.log(inputRef.current); // 콘솔 출력: <input type="text">
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>
      <div style={{ height: 2000 }}></div>
      <input ref={inputRef} type="text" />
      <div style={{ height: 2000 }}></div>
    </div>
  );
}
