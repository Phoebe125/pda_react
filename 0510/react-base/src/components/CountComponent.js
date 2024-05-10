import React, { useCallback, useEffect, useState } from "react";

export default function CountComponent() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(true);

  const ChangeValue = () => {
    setValue1((v) => !v);
  };

  const addCount = useCallback(() => {
    setCount(count + 1);
  }, [count]); // dependency array가 바뀔때만, "함수를 다시 정의한다". (sortCount)
  // 함수 호출의 결과가 필요하다! => useMemo

  useEffect(() => {
    console.log("데이터 받아오기! 이 함수는 한 번 호출됩니다.");
    return () => {
      console.log(
        "메모리를 잡아 먹으면 리소스를 해제하는 함수를 return 해주셔야 합니다."
      );
    };
  }, []);

  useEffect(() => {
    console.log(`카운트가 증가될 때마다 실행됩니다. \n - count: ${count}`);
    return () => {
      console.log("기존 uesEffect에서 사용한 것들을 반환합니다.", count);
    };
  }, [count]);

  return (
    <div>
      <div>
        <div>{value1}</div>
        <button onClick={ChangeValue}>State변경</button>
      </div>

      <div>
        <div>{count}</div>
        <button onClick={addCount}>1 증가</button>
      </div>
    </div>
  );
}
