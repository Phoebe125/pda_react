import axios from "axios";

export async function getBoardList() {
  const resp = await axios.get("http://localhost:3000/api/board");
  return resp.data;
}

export async function fetchBoardItem(boardId) {
    const resp = await axios.get(`http://localhost:3000/api/board/${boardId}`);
    return resp.data;
  }