import React from "react";
import styled from "styled-components";
import Button from "./Button";
import MenuContainer from "../../containers/common/MenuContainer";
// import Responsive from "./Responsive";
import logo from "../auth/logo.jpg";
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  top: 3rem;
  background: white;
`;
const LoginBlock = styled.div`
  background: white;
  width: 90%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 1.5rem;
  }
`;
const Space = styled.div`
  height: 5rem;
`;
const Header = ({ user, onLogout }) => {
  return (
    <>
      <LoginBlock>
        {<img src={logo} alt="logo" />}
        {user ? (
          <Button onClick={onLogout}>로그아웃</Button>
        ) : (
          <Button to={"/login"}>로그인</Button>
        )}
      </LoginBlock>
      <HeaderBlock>
        <MenuContainer></MenuContainer>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;
