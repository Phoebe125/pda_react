import axios from "axios";

const BASE_URL = "/todos";
const service = axios.create({ baseURL: BASE_URL });

export async function getBoard() {
  const resp = await service.get("/");
  return resp.data;
}

export async function deleteBoard(boardId) {
  const resp = await service.delete(`/${boardId}`);
  return resp.data;
}

export async function createBoard({ content, color}) {
  console.log("content", content, "backgroundColor", color)
  const resp = await service.post("/", {
    content: content,
    backgroundColor: color,
  });
  return resp.data;
}

export async function fetchBoardItem(boardId) {
  const resp = await service.get(`/${boardId}`);
  return resp.data;
}
