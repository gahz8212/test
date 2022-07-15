import React, { useState } from "react";
import styled from "styled-components";
const Colors = [
  { name: "RED", hex: "#ffb598" },
  { name: "ORANGE", hex: "#ffdcaa" },
  { name: "PURPLE", hex: "#d7beff" },
  { name: "CYAN", hex: "#c7f5ed" },
  { name: "BLUE", hex: "#c2dbff" },
];
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Label = styled.label`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  background: ${(props) => props.color};
`;
const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    background: ${(props) => props.color};
  }
`;
const Menu = ({ initial, onChange }) => {
  return (
    <Buttons>
      {Colors.map((color) => (
        <div key={color.name}>
          <Input
            type="radio"
            id={color.name}
            name="color-selector"
            value={color.name}
            color={color.hex}
            checked={color.name === initial}
            onChange={() => onChange(color.name)}
          />
          <Label htmlFor={color.name} color={color.name}></Label>
        </div>
      ))}
    </Buttons>
  );
};
const TestForm = () => {
  const [initial, setColor] = useState("RED");
  const onChange = (color) => {
    setColor(color);
  };
  return <Menu initial={initial} onChange={onChange} />;
};
export default TestForm;
