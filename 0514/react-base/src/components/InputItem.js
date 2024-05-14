import React, {useState} from 'react'
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function putData(body) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return axios
      .post(url, JSON.stringify(body), {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then((response) => response.data);
  }

export default function InputItem({boardArr, setboardArr, setWriteMode}) {
    const [newTitle, setNewTitle] = useState();
    const [newContent, setNewContent] = useState();

    function submitItem(){
        const idx = boardArr[boardArr.length-1].id;
        const userId = idx >= 10 ? Math.floor(idx / 10) + 1 : 1;
        const body = {title: newTitle, body: newContent, userId:userId}
        putData(body).then((resp) => {
            console.log(resp);
            setboardArr((prev)=>[...prev, resp]);
            setNewTitle("");
            setNewContent("");
            setWriteMode(prev=>!prev);
            }
        )
    }

    return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center", margin: "30px"}}>
        <div style={{fontSize:"2rem"}}>새로운 글 작성하기</div>
        <input style={{width: "500px"}} type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}></input>
        <textarea style={{width: "500px", height:"300px"}} value={newContent} onChange={(e)=>setNewContent(e.target.value)}></textarea>
        <Button style={{width: "200px"}} variant="secondary" onClick={submitItem}>작성 완료</Button>
    </div>
  )
}
