import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import MyPage from './components/MyPage';
import ThememButton from './components/ThemeButton';

function App() {
  return (
    <ThemeProvider>
      <ThememButton />
        <MyPage/>
    </ThemeProvider>
  );
}

export default App;
