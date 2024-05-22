import React from "react";
import { Container } from "react-bootstrap";
import MyNavBar from "~/components/MyNavBar/MyNavBar";
import MyFooter from "~/components/MyFooter/MyFooter";
import { Outlet } from "react-router-dom";

export function BoardLayout() {
  return (
    <>
      <MyNavBar brandTitle="My-React-Board" />
      <Container>
        <Outlet /> 
        {/* Children 부분이 들어옴 */}
      </Container>
      <MyFooter brandTitle="My-React-Board" />
    </>
  );
}
