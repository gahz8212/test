import React from "react";
import styled from "styled-components";
const AskModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  background: white;
  border-radius: 4px;
  width: 240px;
  padding: 2rem;
  .buttons {
    margin-bottom: -1rem;
    text-align: right;
    button {
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 0.2rem 0.5rem;
      font-weight: bolder;
      /* font-size: 1.1rem; */
      &:hover {
        color: white;
      }
    }
    button + button {
      margin-left: 1rem;
    }
  }
`;

const AskModal = ({ visible, onCancel, title, descript }) => {
  if (!visible) return null;
  return (
    <AskModalBlock>
      <Message>
        <div style={{ marginBottom: "1rem" }}>
          <b>{title}</b>
        </div>
        <div style={{ marginBottom: "1rem" }}>{descript}</div>
        <div className="buttons">
          <button style={{ background: "tomato" }}>삭제</button>
          <button style={{ background: "powderblue" }} onClick={onCancel}>
            취소
          </button>
        </div>
      </Message>
    </AskModalBlock>
  );
};

export default AskModal;
