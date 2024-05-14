import React from "react";
import {useColor} from "./useTodo"

export default function Colorbar() {
    const {setColor} = useColor()     
    const changeColor = (e) => {
        setColor(e.target.style.backgroundColor);
    };

    return (
    <div style={{display:"flex", margin:"10px auto",  width: "30%",  justifyContent: "space-between", alignItems: "center"}}>
        <div style={{ width: "80px", height: "80px", borderRadius:"80px", backgroundColor: "#FFC0CB" }} onClick={changeColor}></div>
        <div style={{ width: "80px", height: "80px", borderRadius:"80px", backgroundColor: "#98FB98" }} onClick={changeColor}></div>
        <div style={{ width: "80px", height: "80px", borderRadius:"80px", backgroundColor: "#FFFF00" }} onClick={changeColor}></div>
        <div style={{width: "80px", height: "80px", borderRadius:"80px", backgroundColor: "#00FFFF" }} onClick={changeColor}></div>
    </div>
    )
}