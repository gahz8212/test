import React from "react";
import styled from "styled-components";
const ResponsiveBlock = styled.div`
  margin: 0 auto;
  width: 1024px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
