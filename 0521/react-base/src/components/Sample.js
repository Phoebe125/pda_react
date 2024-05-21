import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import SearchItem from "./SearchItem";
import Login from "./User";
import Logout from "./Logout";
import { TodoProvider } from "./useTodo";
import Cookies from "js-cookie";
import axios from "axios";

export default function Sample() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = Cookies.get("authToken");
    console.log(token);
    if (token) {
      axios
        .get("/users/verify-token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        });
    }
  }, []);

  return (
    <div>
      {user === "" ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <Logout user={user} setUser={setUser} />
          <TodoProvider>
            <TodoInput />
            <Colorbar />
            <SearchItem search={search} setSearch={setSearch} />
            <TodoList search={search} />
          </TodoProvider>
        </div>
      )}
    </div>
  );
}
