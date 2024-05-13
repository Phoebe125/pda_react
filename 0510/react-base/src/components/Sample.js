import React, { useState, useEffect} from "react";
import TodoInput from "./TodoInput"
import Colorbar from "./Colorbar"
import TodoList from "./TodoList"
import SearchItem from "./SearchItem";

// 0. componoent 분리 없이
// export default function Sample() {
//   const inputRef = useRef();
//   const [arr, setArr] = useState([
//     { text: "1", backgroundColor: "#FFC0CB" },
//     { text: "2", backgroundColor: "#FFFF00" },
//     { text: "3", backgroundColor: "#00FFFF" },
//   ]);
//   const [text, setText] = useState("");
//   const [color, setColor] = useState("");

//   const submitInput = () => {
//     console.log(inputRef.current.style);
//     setArr((arr) => [
//       ...arr,
//       {
//         text: inputRef.current.value,
//         backgroundColor: inputRef.current.style.backgroundColor,
//       },
//     ]);
//     console.log(color);
//   };

//   const changeColor = (e) => {
//     inputRef.current.style.backgroundColor = e.target.style.backgroundColor;
//     setColor(e.target.style.backgroundColor);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "30px",
//           margin: "30px",
//           textAlign: "center"
//         }}
//       >
//         <div style={{ fontSize: "40px"}}>Todo App</div>
//         <div>
//           <input
//             type="text"
//             ref={inputRef}
//             value={text}
//             onChange={(e) => {
//               setText(e.target.value);
//             }}
//           />
//           <button onClick={submitInput}>입력</button>
//         </div>
//       </div>
//       <div style={{display:"flex", margin:"0 auto",  width:"50%", height: "50px", justifyContent: "space-between", alignItems: "center"}}>
//         <div style={{ width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#FFC0CB" }} onClick={changeColor}></div>
//         <div style={{ width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#98FB98" }} onClick={changeColor}></div>
//         <div style={{ width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#FFFF00" }} onClick={changeColor}></div>
//         <div style={{width: "50px", height: "50px", borderRadius:"50px", backgroundColor: "#00FFFF" }} onClick={changeColor}></div>
//       </div>
//       <div style={{display:"flex", flexDirection:"column", margin:"40px auto",  width:"500px", alignItems: "center", textAlign:"center"}}>
//         <div style={{ fontSize: "30px", marginBottom:"20px"}}>Todo Items</div>
//         {arr.map((elem) => (
//           <div key={elem} style={{padding:"10px", width:"500px", backgroundColor: elem.backgroundColor }}>
//             {elem.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 모듈화
export default function Sample() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("");
    const [search, setSearch] = useState("");
    const [idx, setIdx] = useState(0); // div tag들의 id 값

    const sessionArrString = window.sessionStorage.getItem("data");
    const sessionArr = sessionArrString ? JSON.parse(sessionArrString) : null;
    const [arr, setArr] = useState(sessionArr || []);

        // { id: 1, text: "1", backgroundColor: "#FFC0CB" },
        // { id: 2, text: "2", backgroundColor: "#FFFF00" },
        // { id: 3, text: "3", backgroundColor: "#00FFFF" },
        
    useEffect(() => {
        window.sessionStorage.setItem('data', JSON.stringify(arr));
    }, [arr]);
    
    return (
      <div>
          <TodoInput text={text} setText={setText} setArr={setArr} color={color} idx={idx} setIdx={setIdx}/>
          <Colorbar setColor={setColor}/>
          <SearchItem search={search} setSearch={setSearch}/>
          <TodoList arr={arr} search={search} setArr={setArr} text={text} setText={setText}/>
      </div>
    );
  }
  

