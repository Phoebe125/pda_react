import axios from "axios";

const BASE_URL = "http://localhost:3000/api/board";
const service = axios.create({ baseURL: BASE_URL });

export async function getBoard() {
  const resp = await service.get("/");
  return resp.data;
}

export async function fetchBoardItem(boardId) {
  const resp = await service.get(`/${boardId}`);
  console.log(resp.data);
  return resp.data;
}
