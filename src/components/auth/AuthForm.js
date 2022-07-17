import React from "react";
import styled from "styled-components";
const StyledInput = styled.input``;
const TextMap = { login: "로그인", join: "회원가입" };
const AuthForm = ({ type }) => {
  const text = TextMap[type];
  return (
    <div>
      <StyledInput />
      {type === "login" && <StyledInput />}
      <StyledInput />
    </div>
  );
};

export default AuthForm;
