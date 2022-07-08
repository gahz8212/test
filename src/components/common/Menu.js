import React from "react";
import styled, { css } from "styled-components";
import Responsive from "./Responsive";
const Menus = [
  { type: "all", text: "MAIN" },
  { type: "parts", text: "PARTS" },
  { type: "order", text: "ORDER" },
  { type: "export", text: "EXPORT" },
  { type: "config", text: "CONFIG" },
];
const MenuBlock = styled(Responsive)`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
const MenuItem = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  ${(props) =>
    props.active &&
    css`
      color: green;
      border-bottom: 4px solid lightgreen;
    `}
  &:hover {
    border-bottom: 4px solid green;
  }
`;
const Menu = ({ onSelect, menu }) => {
  return (
    <MenuBlock>
      {Menus.map((item) => (
        <MenuItem
          key={item.type}
          onClick={() => onSelect(item.type)}
          active={menu === item.type}
        >
          {item.text}
        </MenuItem>
      ))}
    </MenuBlock>
  );
};

export default Menu;
