import React from "react";
import logo from "../logo.svg";

export default function CaptionImage(props) {
    return (
        <div>
            <img src={props.imgUrl} alt={props.caption}></img>
            <p>{props.caption}</p>
        </div>    
    )
}