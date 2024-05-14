import React from "react";
import {useColor} from "./useTodo"

export default function Colorbar() {
    const {setColor} = useColor()     
    const changeColor = (e) => {
        setColor(e.target.style.backgroundColor);
    };

    return (
    <div style={{display:"flex", margin:"0 auto",  width:"50%", height: "50px", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{ width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#FFC0CB" }} onClick={changeColor}></div>
        <div style={{ width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#98FB98" }} onClick={changeColor}></div>
        <div style={{ width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#FFFF00" }} onClick={changeColor}></div>
        <div style={{width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#00FFFF" }} onClick={changeColor}></div>
    </div>
    )
}