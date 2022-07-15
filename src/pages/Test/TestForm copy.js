import React, { useState } from "react";
import styled, { css } from "styled-components";
const menus = [
  { id: 1, type: "one", text: "첫번째" },
  { id: 2, type: "two", text: "두번째" },
  { id: 3, type: "three", text: "세번째" },
  { id: 4, type: "four", text: "네번째" },
  { id: 5, type: "five", text: "다섯번째" },
];
const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1rem;
`;
const Item = styled.div`
  cursor: pointer;
  background: lightgreen;
  border-radius: 12px;
  padding: 0 1rem;
  ${(props) =>
    props.item &&
    css`
      color: white;
    `}
`;
const MenuItem = React.memo(({ item, onSelect, text, type }) => {
  return (
    <Item onClick={() => onSelect(type)} item={item}>
      {text}
    </Item>
  );
});
const TestForm = () => {
  const [item, setItem] = useState("one");
  const onSelect = (item) => {
    console.log(item);
    setItem(item);
  };
  return (
    <MenuBlock>
      {menus.map((menu) => (
        <MenuItem
          key={menu.id}
          item={item === menu.type}
          text={menu.text}
          onSelect={onSelect}
          type={menu.type}
        />
      ))}
    </MenuBlock>
  );
};

export default TestForm;
