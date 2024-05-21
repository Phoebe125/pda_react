import axios from "axios";

const BASE_URL = "/users";
const service = axios.create({ baseURL: BASE_URL });

export async function login({email, password}) {
  const resp = await service.post("/login", {
    email: email,
    password: password
  });
  return resp.data;
}

export async function logout(){
  const resp = await service.get("/logout");
  return resp.data;
}

