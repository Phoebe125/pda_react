import React, { useState, useMemo } from "react";

// 소수를 계산하는 함수
function calculatePrimes(limit) {
  console.log(`limit: ${limit}에 대한 소수 계산`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  console.log("소수 계산 완료");
  return primes;
}

export default function PrimeCaculator(props) {
  const [limit, setLimit] = useState(10); // state인 limit이 바뀐다 => 다시 그린다 => 함수를 다시 실행한다.
  const [count, setCount] = useState(0); // count가 증가되는 것 처럼 count가 변화해도 =>  다시 그린다 => 함수를 다시 실행한다 => 소수를 다시 계산한다 (count는 소수에 영향 없는데 굳이?)

  // const primes = calculatePrimes(limit); // 0. Memo 사용안할 경우
  // 만일 useMemo가 없을 때는, count가 변화할 때도, PrimrCalculator 함수가 실행되어서 소수를 다시 계산함

  const primes = useMemo(() => calculatePrimes(limit), [limit]); // callbackFunction, Dependency Array 순으로 넣음
  // "limit이 바뀔 때만", callback 함수의 return 값을 primes 변수에 저장할 것이야
  // 성능의 최적화를 할때만 사용한다.

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={addCount}>카운트 증가</button>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>계산된 소수: {primes.join(", ")}</p>
    </div>
  );
}
