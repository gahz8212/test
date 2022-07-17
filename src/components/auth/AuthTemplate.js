import React from "react";
import styled from "styled-components";
const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justifi-content: center;
  align-items: center;
  .whitebox {
    width: 250px;
    border-radius: 4px;
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <div className="whitebox">{children}</div>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
