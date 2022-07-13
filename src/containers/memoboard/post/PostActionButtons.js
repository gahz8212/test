import React from "react";
import Responsive from "../../../components/common/Responsive";
import styled from "styled-components";
import RemoveModal from "../../common/RemoveModal";
const PostActionButtonsBlock = styled(Responsive)`
  margin: 8rem auto 1rem;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.3rem 0.5rem;

    &:hover {
      /* opacity: 0.9; */
      color: white;
    }
  }
  button + button {
    margin-left: 1rem;
  }
`;

const PostActionButtons = ({
  onGoHome,
  onEdit,
  onRemove,
  onConfirm,
  onCancel,
  visible,
}) => {
  return (
    <>
      <PostActionButtonsBlock>
        <button style={{ background: "lightgreen" }} onClick={onGoHome}>
          Home
        </button>
        <button style={{ background: "tomato" }} onClick={onEdit}>
          Edit
        </button>
        <button style={{ background: "yellowgreen" }} onClick={onRemove}>
          Delete
        </button>
      </PostActionButtonsBlock>
      <RemoveModal
        visible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostActionButtons;
