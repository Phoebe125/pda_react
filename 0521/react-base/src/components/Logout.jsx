import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { logout } from "../apis/auth";
import {clientLogout} from "./utils"

export default function Logout({ user, setUser }) {
  function logoutBtn() {
    logout().then((resp) => {
      setUser(null);
      clientLogout();
    });
  }
  return (
    <div style={{ position: "relative", height: "10vh" }}>
      <div style={{ position: "absolute", top: "66px", right: "200px" }}>{user.email}님 환영합니다.</div>
      <div style={{ position: "absolute", top: "60px", right: "60px" }}>
        <Button onClick={logoutBtn}>로그아웃</Button>
      </div>
    </div>
  );
}
