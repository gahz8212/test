import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .whitebox {
    width: 250px;
    border-radius: 4px;
    background: white;
    .logo {
      margin: 0.5rem 0 0.7rem;
      /* text-align: center;
      font-weight: bold;
      font-size: 1.25rem;
      letter-spacing: 4px; */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <div className="whitebox">
        <div className="logo">
          <Link to={"/login"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {children}
      </div>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
