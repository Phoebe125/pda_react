import React from "react";

export default function TodoItem({elem, arr, setArr}) {
    const deleteTodo = (e) => {
        const tmpArr = [];
        {arr.map((elem, i) => e.target.id !== elem.id ? console.log("맞음", elem.id, e.target) : console.log("틀림", elem))}
        console.log(tmpArr);
        setArr((arr)=>tmpArr);
    }

    return (
        <div id={elem.id} onClick={deleteTodo} style={{padding:"10px", width:"500px", backgroundColor: elem.backgroundColor }}>{elem.text}</div>
    )
}