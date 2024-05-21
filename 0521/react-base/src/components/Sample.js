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
import { getUserInfo } from "./utils";

export default function Sample() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserInfo();
    setUser(user||null);
  }, []);

  return (
    <div>
      {user === null ? (
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
