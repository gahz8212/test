import React from "react";
import styled, { css } from "styled-components";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";
const Menus = [
  { type: "all", text: "게시판", link: "/", sub: [] },
  {
    type: "parts",
    text: "PARTS",
    link: undefined,
    sub: [
      { type: "history", text: "이력" },
      { type: "config", text: "설정" },
      { type: "com_config", text: "결합 설정" },
    ],
  },
  {
    type: "order",
    text: "ORDER",
    sub: [
      { type: "ordering", text: "발주" },
      { type: "orderList", text: "발주내역" },
      { type: "orderConfirm", text: "발주확인" },
    ],
    link: undefined,
  },
  {
    type: "export",
    text: "EXPORT",
    link: undefined,
    sub: [
      { type: "schedule", text: "스케줄" },
      { type: "document", text: "서류작성" },
      { type: "report", text: "수출실적" },
    ],
  },
  {
    type: "config",
    text: "CONFIG",
    link: undefined,
    sub: [
      { type: "userinfo", text: "회원정보" },
      { type: "help", text: "도움말" },
    ],
  },
];
const MenuBlock = styled(Responsive)`
  display: flex;
  justify-content: space-around;
  /* margin-top: 3rem; */
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
const SubItem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: red;
      background: lightgreen;
    `}
  padding-bottom: 0.5rem;
  /* &:nth-child(even) {
    background: lightgray;
  } */
  &:hover {
    background: lightgreen;
  }
  & + & {
    padding: 0.5rem 0;
    border-top: 1px solid gray;
  }
`;
const MenuSubItem = styled.div`
  /* border-radius: 4px;
  border: 1px solid gray; */
  visibility: hidden;
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
    `}

  padding: 0.5rem 0;
`;

const Menu = ({ onSelect, menu }) => {
  return (
    <MenuBlock>
      {Menus.map((item) => (
        <div>
          <MenuItem
            key={item.type}
            onClick={() => onSelect({ item: item.type })}
            active={menu.item === item.type}
          >
            {item.link ? (
              <Link to={item.link}>{item.text}</Link>
            ) : (
              <div>{item.text}</div>
            )}
          </MenuItem>
          <MenuSubItem visible={menu.item === item.type}>
            {item.sub.map((s) => (
              <SubItem
                key={s.text}
                onClick={() => onSelect({ item: item.type, sub: s.type })}
                active={menu.sub === s.type}
              >
                {s.text}
              </SubItem>
            ))}
          </MenuSubItem>
        </div>
      ))}
    </MenuBlock>
  );
};

export default Menu;
