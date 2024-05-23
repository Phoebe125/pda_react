import axios from "axios";
const BASE_URL = "http://localhost:3000/api/users";
const service = axios.create({ baseURL: BASE_URL });

export async function login({ email, password }) {
  const resp = await service.post("/login", {
    email: email,
    password: password,
  });
  console.log(resp.data);
  return resp.data;
}

export async function logout() {
  const resp = await service.get("/logout");
  return resp.data;
}
