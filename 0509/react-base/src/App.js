import logo from "./logo.svg";
// import './App.css';
import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CaptionImage.js";
function App() {
  const myName = "이선민!!";
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <CaptionImage imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrggwhBlIIyNBOQfllbvJsDS9AlI7mtMStKS95dLrrWw&s" 
      caption="구름 이미지" />
    </div>
  );
}

export default App;
