import React, { useState, useContext, createContext } from "react";

// 테마 컨텍스트 생성
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

// 1. ThemeContext.Provider에서 value로 전달 + 