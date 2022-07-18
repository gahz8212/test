import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div`
  padding: 1rem;
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  border-bottom: 2px solid lightgreen;
  width: 90%;
  font-size: 1.1rem;
  &::placeholder {
    color: green;
  }
  cursor: pointer;
  & + & {
    margin-top: 1rem;
  }
  &:hover {
    border-bottom: 2px solid green;
    background: lightgreen;
    &::placeholder {
      color: white;
    }
  }
`;
const Footer = styled.div`
  text-align: right;
  color: tomato;
  margin-top: 0.5rem;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
const TextMap = { login: "로그인", join: "회원가입" };
const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = TextMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          placeholder="이메일"
          onChange={onChange}
          name="email"
          value={form.email}
          required
        />
        {type === "join" && (
          <StyledInput
            placeholder="대화명"
            onChange={onChange}
            name="nick"
            value={form.nick}
            required
          />
        )}
        <StyledInput
          placeholder="비밀번호"
          onChange={onChange}
          name="password"
          value={form.password}
          required
        />
        <Button fullWidth marginTop1rem>
          {text}
        </Button>
      </form>
      {type === "join" ? (
        <Footer>
          <Link to="/login">로그인</Link>
        </Footer>
      ) : (
        <Footer>
          <Link to="/join">회원가입</Link>
        </Footer>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;
