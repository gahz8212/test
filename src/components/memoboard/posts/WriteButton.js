import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Responsive from "../../common/Responsive";

const WriteButtonBlock = styled(Responsive)`
  display: flex;
  justify-content: flex-end;
  margin: 6rem 4rem 0;
  width: 70%;
`;
const WriteButtons = () => {
  return (
    <div>
      <WriteButtonBlock>
        <Button to={"/write"}>μ κΈ μμ±</Button>
      </WriteButtonBlock>
    </div>
  );
};

export default WriteButtons;
