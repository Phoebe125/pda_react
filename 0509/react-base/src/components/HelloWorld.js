import React from "react";
import "./HelloWorld.css";
import Style from './HelloWorld.module.css';
import logo from "../logo.svg";

export default function HelloWorld() {
    return (
        <div>
            {/* 1. css 파일을 별도로 두고, 적용하는 방법 */}
            <div className="container">
                <h1>Hello, World!</h1>
                <p>This is my first React Application.</p>
            </div>
            {/* 2. inline으로 적용하는 방법! */}
            <div style={{textAlign:"center", color:"red"}}>
                <h1>Hello, World!</h1>
                <p>This is my first React Application.</p>
            </div>
            {/* 3. Object 처럼 사용하는 방법! */}
            <div className={Style.container}>
                <h1>Hello, World!</h1>
                <p>This is my first React Application.</p>
            </div>
            <img src={logo}></img>
        </div>    
    )
}