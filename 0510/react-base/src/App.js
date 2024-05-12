import logo from "./logo.svg";
import FocusInputButton from "./components/FocusInputButton";
import PrimeCaculator from "./components/PrimeCaculator";
import CountComponent from "./components/CountComponent";
import Sample from "./components/Sample";
import SampleAnswer from "./components/SampleAnswer";
import { ThemeProvider } from "../../../0513/react-base/src/components/ThemeProvider";

function App() {
  
  return (
    <div>
      {/* <FocusInputButton /> */}
      {/* <PrimeCaculator text={4} />
      <CountComponent/> */}

      {/* 연습문제 4 */}
      <Sample/>
      {/* <SampleAnswer/> */}
    </div>
  );
}

export default App;
