import React from "react";
import styled from "styled-components";
import Button from "./Button";
import MenuContainer from "../../containers/common/MenuContainer";
import Responsive from "./Responsive";
import logo from "../auth/통합관리.ico";
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  /* background: yellow; */
  /* box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2); */
  /* align-items: center; */
`;
const LoginBlock = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
