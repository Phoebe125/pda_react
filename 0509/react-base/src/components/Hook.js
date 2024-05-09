import React, {useState, useEffect} from 'react'

export default function CountComponent(){
    const [count, setCount] = useState(0);
    // console.log("count", count);

    const addCount = () =>{
        setCount(count+1);
        // console.log(count);
        // 비동기라 바로 업데이트가 되는게 아니라 컴포넌트 함수 쭉 읽고 그다음에 값이 바뀌어
        //setCount(count+1)하고 . 그다음에 count값 콘솔에 찍으면 아마 안바뀌어잇을거여
    }

    useEffect(()=>{ // Mount 될 때 (컴포넌트가 생길 때) 한 번만 실행 됨
        console.log("데이터 받아오기! (이 함수는 한 번만 실행됩니다.)");
        return ()=>{ // 함수인데, 이 컴포넌트가 없어질 때, 혹은 useEffect가 한 번 더 실행 될 때 실행되는 함수이다. 
            // 마무리/종료 하기 위한 함수이다.
            // 리소스를 해제하기 위한 함수들이 들어간다.
            console.log("메모리를 잡아먹으면 리소스 해제하는 함수를 return해주어야 합니다")
        } //
    }, [])

    useEffect(()=>{ // count의 값이 변할 때마다 함수가 실행 됨
        console.log(`카운트가 증가할 때마다 실행!\n -count: ${count}`);
    }, [count])
    // 두번씩 보이는건 StrictMode 때문이다

    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1증가</button>
        </div>
    )  // 값이 바뀌면 새로 그린다.
}