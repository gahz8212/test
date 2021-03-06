import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Responsive from "../../common/Responsive";
const PostButtonsBlock = styled(Responsive)`
  display: flex;
  width: 35%;
  margin: 2rem auto;
  Button:nth-child(1) {
    background: green;
    padding: 0 1rem;
  }
  Button + a {
    margin-left: 1rem;
  }
`;
const PostButtons = ({ originalPostId, onPublish, onUpdate }) => {
  return (
    <PostButtonsBlock>
      {originalPostId ? (
        <Button onClick={onUpdate}>수정</Button>
      ) : (
        <Button onClick={onPublish}>등록</Button>
      )}
      <Button to="/">취소</Button>
    </PostButtonsBlock>
  );
};

export default PostButtons;
