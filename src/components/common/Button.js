import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
const ButtonStyle = css`
  border: none;
  outline: none;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  border-radius: 4px;
  background: darkgray;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    background: black;
    color: white;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding: 0.3rem 0.5rem;
      width: 100%;
    `}
`;
const StyleLink = styled(Link)`
  ${ButtonStyle}
`;
const StyleButton = styled.button`
  ${ButtonStyle}
`;
const Button = (props) => {
  return props.to ? (
    <StyleLink {...props}></StyleLink>
  ) : (
    <StyleButton {...props}></StyleButton>
  );
};

export default Button;
