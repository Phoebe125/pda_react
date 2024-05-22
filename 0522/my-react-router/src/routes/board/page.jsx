import React from "react";
import { Container } from "react-bootstrap";
import MyNavBar from "~/components/MyNavBar/MyNavBar";
import MyFooter from "~/components/MyFooter/MyFooter";
import { useLocation } from "react-router-dom";

export function BoardListPage() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>My Board</h1>
      <p>boardPage</p>
    </div>
  );
}
