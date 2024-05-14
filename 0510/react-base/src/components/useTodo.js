import React, { useEffect, useState, useContext, createContext } from "react";

// 1. Context 생성
const UseTodo = createContext();

// 테마 제공자 컴포넌트
export function TodoProvider({ children }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [idx, setIdx] = useState(0); // div tag들의 id 값

  const sessionArrString = window.sessionStorage.getItem("data");
  const sessionArr = sessionArrString ? JSON.parse(sessionArrString) : null;
  const [arr, setArr] = useState(sessionArr || []);

  useEffect(() => {
    window.sessionStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  // 2. Context.Provider 정의 및 공유할 객체를 value props로 전달.
  return (
    <UseTodo.Provider value={{ text, setText, color, setColor, idx, setIdx, arr, setArr }}>{children}</UseTodo.Provider>
  );
}

// 사용자 정의 훅
export function useTodoList() {
  const { arr } = useContext(UseTodo);
  return { arr };
}

export function useAddTodoList() {
  const { text, setText, setArr, color, idx, setIdx } = useContext(UseTodo);
  return { text, setText, setArr, color, idx, setIdx };
}

export function useColor() {
  const { setColor } = useContext(UseTodo);
  return { setColor };
}

export function useRemoveTodo() {
  const { arr, setArr } = useContext(UseTodo);
  const deleteTodo = (e) => {
    const tmpArr = arr.filter((item) => parseInt(item.id) !== parseInt(e.currentTarget.parentNode.id));
    setArr((arr) => tmpArr);
  };
  return deleteTodo;
}

export function useUpdateTodo() {
  const { setArr } = useContext(UseTodo);

  const [update, setUpdate] = useState(false);
  const [updateContext, setUpdateContext] = useState("");
  const [updateId, setUpdateId] = useState(0);
  const [updateColor, setUpdateColor] = useState("");

  const updateTodo = (e) => {
    const tmp = e.target.parentNode.querySelector("span").textContent;
    setUpdateId((prevId) => parseInt(e.target.parentNode.id));
    setUpdate((prevState) => !prevState);
    setUpdateContext((prevUpdate) => tmp);
    setUpdateColor((prevColor) => e.target.parentNode.style.backgroundColor);
  };

  const submitUpdate = (e) => {
    setUpdate((prevState) => !prevState);
    setArr((arr) => {
      const newArr = [];

      for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].id) === parseInt(updateId)) {
          newArr.push({
            id: updateId,
            text: updateContext,
            backgroundColor: updateColor,
          });
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    });
  };

  return {update, updateContext, setUpdateContext, updateTodo, submitUpdate}
}
