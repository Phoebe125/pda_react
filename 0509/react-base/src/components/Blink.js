import React, { useEffect, useState } from "react";

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);
  // const X = useState(초기값);
  // X[0]: State 자체, X[1]: State를 변경할 수 있는 함수

  useEffect(() => {
    const timeoutId = setInterval(() => {
        setShowText((showText) => {
            return !showText;
        });
        // console.log("호출");
    }, 1000); // 1000ms 마다 입력받은 함수를 실행시킨다
    return () => {
      clearInterval(timeoutId); // 반환하는 함수는 unMount 될때 호출되는 함수, 인자로는 Id가 들어가면 됨
    };
  }, []);
  // 만일 이벤트 등록하는 함수만 있고, 해제하는 함수가 없으면 이벤트 등록이 계속해서 이뤄짐. 이벤트 실행을 계속한다.

  return <div>{showText ? text : null}</div>;
}
