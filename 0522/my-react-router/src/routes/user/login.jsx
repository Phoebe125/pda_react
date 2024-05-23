import React, { useState } from "react";
import { login } from "../../../lib/apis/users";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitLogin() {
    login({email, password}).then((data) => {
      navigate("/board");
    });
  }

  return (
    <div>
      <div>
        이메일:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        비밀번호:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={submitLogin}>로그인하기</button>
    </div>
  );
}
