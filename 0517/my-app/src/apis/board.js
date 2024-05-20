import axios from "axios";

export function getBoard() {
  const url = "/board";
  const output = axios.get(url).then((response) => response.data);
  return output;
}
