### 프로디지털 아카데미 프론트 리액트 강의 (5/13)

### useContext
- 컴포넌트 Tree 내에서 데이터를 상호간에 공유할 때 사용하는 훅
- (너무 많이 사용하는 것은 관리 비용이 증가할 수 있음.)
- Context를 이용하면, 컴포넌트 트리 안에 존재하는 모든 컴포넌트에 상태를 공유하도록 할 수 있음!
- 예시:
```jsx
import React, { useState, useContext, createContext } from "react";

// 1. Context 생성
const ThemeContext = createContext();

// 테마 제공자 컴포넌트
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // 초기 테마는 "light"

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  // 2. Context.Provider 정의 및 공유할 객체를 value props로 전달.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      {children}
    </ThemeContext.Provider>
  );

  // 3. value Props로 전달된 객체를 공유할 컴포넌트를 Context.Provioder 내부에 위치
}

// 사용자 정의 훅
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}
```

```jsx
import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThememButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      현재 테마: {theme === "light" ? "밝은 모드" : "어두운 모드"}
    </button>
  );
}
```


### CSS 라이브러리들
- Bootstrap
- Foundation css 
- Semantic UI
- materialize css (구글이 좋아하는 디자인)


### REACT의 Design ToolKit
- React Bootstrap
  - `npm install react-bootstrap bootstrap`
  - <a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a> 
  - 각 컴포넌트 밑에 API란 보면, Props 사용법이 나와 있음
- MUI
  - <a href="https://mui.com/core/">https://mui.com/core/</a>
- AntDesign
  - <a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a> 
- shadcn-ui
  - <a href="https://ui.shadcn.com/">https://ui.shadcn.com/</a> 
- fluent ui
  - <a href="https://react.fluentui.dev/">https://react.fluentui.dev/</a>
- ariakit
  - <a href="https://ariakit.org/guide/getting-started">https://ariakit.org/guide/getting-started</a>

