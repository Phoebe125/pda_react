import React from "react";

export default function TodoItem({elem, arr, setArr}) {
    const deleteTodo = (e) => {
        const tmpArr = arr.filter(item => item.id != e.target.id);
        setArr(arr=>tmpArr);
    }

    return (
        <div id={elem.id} onClick={deleteTodo} style={{padding:"10px", width:"500px", backgroundColor: elem.backgroundColor }}>{elem.text}</div>
    )
}