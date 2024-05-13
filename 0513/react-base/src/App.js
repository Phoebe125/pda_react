import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import MyPage from './components/MyPage';
import ThememButton from './components/ThemeButton';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import TodoApp from './components/TodoApp';

function App() {
  return (
    // <ThemeProvider>
    //   <Button variant='primary'>기본 버튼</Button>
    //   <Button variant='danger'>Danger</Button>
    //   <Button variant='info'>Info</Button>
    //   <ThememButton />
    //     <MyPage/>
    // </ThemeProvider>
    <TodoApp />
  );
}

export default App;
