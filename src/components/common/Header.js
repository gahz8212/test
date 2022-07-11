import React from "react";
import styled from "styled-components";

import MenuContainer from "../../containers/common/MenuContainer";
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  background: yellow;
  /* box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2); */
  /* align-items: center; */
`;
const Space = styled.div`
  height: 5rem;
`;
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <MenuContainer></MenuContainer>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;
