import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Hello My React Router</p>
      <Link to="/board" state={{ name: "이선민" }}>
        게시판으로 이동
      </Link>
    </div>
  );
}
