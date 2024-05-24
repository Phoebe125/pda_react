import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardList, fetchBoardItem } from "../../../lib/apis/board_answer";

const initialState = {
  boards: [],
  loading: "idle",
};

// 비동기 처리를 위한 thunk 생성
// 원래 이런 식으로 일일히 작성을 해줘야 했었는데 => 현재 redux-toolkit에서 createAsyncThunk로 처리해준다.

const fetchBoardList = createAsyncThunk(
  "board/fetchBoardList",
  async (_data, thunkAPI) => {
    const data = await getBoardList();
    return data;
  }
);
const fetchBoardById = createAsyncThunk(
  "board/fetchBoardById",
  async (_data, thunkAPI) => {
    const data = await fetchBoardItem({ boardId: boardId });
    return data;
  }
);

// 위의 코드는 아래 thunkBoardActionCreator 와 동일한 코드이다.
// 위의 redux-toolkit 라이브러리를 사용하지 않으면 아래와 같이 사용자가 직접 지정해주면 된다.
// function thunkBoardActionCreator(payload) {
//   return async function (dispatch, getState) {
//     dispatch({
//       type: "board/fetchBoardList/pending",
//     });
//     try {
//       const data = await getBoardList();
//       dispatch({
//         type: "board/fetchBoardList/fulfilled",
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: "board/fetchBoardList/rejected",
//         payload: error,
//       });
//     }
//   };
// }

// const action = thunkBoardActionCreator();
// dispatch(action);

// api를 호출 예정.
console.log(fetchBoardList.pending.type);
console.log(fetchBoardList.fulfilled.type);
console.log(fetchBoardList.rejected.type);

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoardList.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchBoardList.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      // state.boards.push(...action.payload);
      state.boards = action.payload;
    });
    builder.addCase(fetchBoardList.rejected, (state, action) => {
      state.loading = "rejected";
      console.log(action);
    });
  },
});

export { fetchBoardList };
export default boardSlice.reducer;
