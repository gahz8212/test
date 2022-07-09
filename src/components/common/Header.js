import React from "react";
import styled from "styled-components";

import MenuContainer from "../../containers/common/MenuContainer";
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  display: flex;
  /* box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2); */
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
