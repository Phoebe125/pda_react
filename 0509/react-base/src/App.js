import logo from "./logo.svg";
// import './App.css';
import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CaptionImage.js";
function App() {
  const myName = "이선민!!";
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <CaptionImage 
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrggwhBlIIyNBOQfllbvJsDS9AlI7mtMStKS95dLrrWw&s" 
      caption="구름 이미지" /> */}
      <CaptionImage 
      imgUrl="https://nimage.newsway.co.kr/photo/2023/11/22/20231122000127_0700.jpg" 
      caption="이건 트럭입니다" />
    </div>
  );
}

export default App;
