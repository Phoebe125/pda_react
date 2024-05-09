import logo from "./logo.svg";
import { useState } from "react";
// import './App.css';
// import HelloWorld from "./components/HelloWorld";
// import CaptionImage from "./components/CaptionImage.js"; // export default function인 경우
// import {CaptionImage} from "./components/CaptionImage.js"; // export default가 아닌 그냥 export만 했을 때
import BlinkComponent from "./components/Blink.js";
// import CBlinkComponent from "./components/BlinkClass.js"
import CountComponent from "./components/Hook";

function App() {
  const myName = "이선민!!";
  const [showCount, setShowCount] = useState(true);
  return (
    <div className="App">
      {/* <button
        onClick={(e) => {
          setShowCount(!showCount);
        }}
      >
        버튼
      </button>
      {showCount ? <CountComponent /> : null} */}
      {/* <HelloWorld /> */}
      {/* <CaptionImage 
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrggwhBlIIyNBOQfllbvJsDS9AlI7mtMStKS95dLrrWw&s" 
      caption="구름 이미지" /> */}
      {/* <CaptionImage 
      imgUrl="https://nimage.newsway.co.kr/photo/2023/11/22/20231122000127_0700.jpg" 
      caption="이건 트럭입니다" /> */}
      <BlinkComponent text="반짝반짝 빛나는 컴포넌트1"/>
      {/* <CBlinkComponent text="반짝반짝 빛나는 컴포넌트2"/> */}
      {/* <CountComponent /> */}
    </div>
  );
}

export default App;
