import React, { useEffect, useState, useContext, createContext } from "react";
import { getBoard } from "../apis/todo";

// 1. Context 생성
const UseTodo = createContext();

// 테마 제공자 컴포넌트
export function TodoProvider({ children }) {
  const [content, setText] = useState("");
  const [color, setColor] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getBoard().then((resp) => {
      setArr(resp);
    });
  }, []);

  return (
    <UseTodo.Provider value={{ content, setText, color, setColor, arr, setArr }}>{children}</UseTodo.Provider>
  );
}

// 사용자 정의 훅
export function useTodoList() {
  const { arr, setArr } = useContext(UseTodo);
  return { arr, setArr };
}

export function useAddTodoList() {
  const { content, setText, setArr, color} = useContext(UseTodo);
  return { content, setText, setArr, color};
}

export function useColor() {
  const { setColor } = useContext(UseTodo);
  return { setColor };
}
