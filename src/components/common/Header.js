import React from "react";
import styled from "styled-components";

import MenuContainer from "../../containers/common/MenuContainer";
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  display: flex;
  /* align-items: center; */
`;

const Header = () => {
  return (
    <HeaderBlock>
      <MenuContainer></MenuContainer>
    </HeaderBlock>
  );
};

export default Header;
