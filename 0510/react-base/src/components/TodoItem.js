import React from "react";

export default function TodoItem({elem, idx, arr, setArr}) {
    const deleteTodo = (e) => {
        // const target = e.target;
        // console.log(target);
        const tmpArr = [];
        {arr.map((elem, i) => idx !== elem.id ? console.log("맞음", elem, idx, elem.id) : console.log("틀림", elem))}
        console.log(tmpArr);
        setArr((arr)=>tmpArr);
    }

    return (
        <div key={idx} onClick={deleteTodo} style={{padding:"10px", width:"500px", backgroundColor: elem.backgroundColor }}>{elem.text}</div>
    )
}