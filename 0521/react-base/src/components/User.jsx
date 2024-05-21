// 로그인 페이지
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { login } from "../apis/auth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitInput() {
    login({ email, password }).then((resp) => {
      setUser(resp);
    });
  }

  return (
    <div style={{ margin: "100px auto", textAlign: "center" }}>
      <div style={{ margin: "30px" }}> 로그인 먼저 해주세요 </div>
      <InputGroup className="mb-3" style={{ width: "40%", margin: "0 auto" }}>
        <Form.Control
          placeholder="이메일"
          aria-label="이메일"
          aria-describedby="basic-addon2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Control
          placeholder="비밀번호"
          aria-label="비밀번호"
          aria-describedby="basic-addon2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={submitInput}>
          입력
        </Button>
      </InputGroup>
    </div>
  );
}
