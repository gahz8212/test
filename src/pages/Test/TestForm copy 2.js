import React from "react";
import styled from "styled-components";

const Colors = [
  { name: "RED", hex: "#ffb598" },
  { name: "ORANGE", hex: "#ffdcaa" },
  { name: "PURPLE", hex: "#d7beff" },
  { name: "CYAN", hex: "#c7f5ed" },
  { name: "BLUE", hex: "#c2dbff" },
];
const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin-top: 8px;
  padding: 10px;
  border: 1px solid salmon;
`;
const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${(props) => props.value};
`;
const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    background: ${(props) => props.color};
  }
`;
const CustomRadioButton = () => {
  return (
    <ColorSelectorContainer>
      {Colors.map((color) => (
        <div key={color.name}>
          <RadioButton
            type="radio"
            name="color-selector"
            value={color.name}
            id={color.name}
            color={color.hex}
          ></RadioButton>
          <Label htmlFor={color.name} value={color.name}>
            {color.name}
          </Label>
        </div>
      ))}
    </ColorSelectorContainer>
  );
};
const TestForm = () => {
  return (
    <div>
      <h1>색깔을 선택 하세요</h1>
      <CustomRadioButton />
    </div>
  );
};
export default TestForm;
