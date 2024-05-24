/**
 * 1. store/reducers/todo.js 파일 생성
 *   1.1. src/store/reducers/todo.js 파일에 todoSlice 생성
 *   1.2. rootReducer에 todoReducer 추가.
 * 2. TodoApp 구현 (기존에 작성된 코드 복사하셔도 좋습니다.)
 */
/**
 * 1. store/reducers/todo.js 파일 생성
 *      1.1. src/store/reducers/todo.js 파일에 todoSlice 생성
 *      1.2. rootReducer에 todoReducer 추가. (addTodo, removeTodo)
 * 2. TodoApp 구현(기존 작성된 코드 복사하셔도 괜찮습니다.)
 * 3. /todo Route 추가.
 */

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  lastId: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todo } = action.payload;
      state.todos.push({
        id: state.lastId,
        ...todo,
      });
      state.lastId++;
    },
    removeTodo(state, action) {
      const { todoId } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
