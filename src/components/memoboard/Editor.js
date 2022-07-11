import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import Responsive from "../common/Responsive";
const EditorBlock = styled(Responsive)`
  padding: 6rem;
`;
const StyleInput = styled.input`
  border: none;
  outline: none;
  font-size: 4rem;
  width: 100%;
  border-bottom: 1px solid green;
  &:hover {
    background: lightgreen;
    &::placeholder {
      color: green;
    }
  }
`;
const QuillWrapper = styled.div`
  .ql-editor {
    font-size: 1.125rem;
    line-height: 1.5;
    height: 250px;
    overflow: auto;
  }
  .ql-editor.ql-blank::before {
    left: 0;
  }
`;
// const Editor = ({ onChangeField, body, title }) => {
const Editor = () => {
  const quillInstance = useRef(null);
  const quillElement = useRef(null);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 입력하세요",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ order: "list" }, { order: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
    // const quill = quillInstance.current;
    // quill.on("text-change", (delta, oldDelta, source) => {
    //   if (source === "user") {
    //     onChangeField({ key: "body", value: quill.root.innerHTML });
    //   }
    // });
  });
  //   const mount = useRef(false);
  //   useEffect(() => {
  //     if (mount.current) {
  //       return;
  //     }
  //     quillInstance.current.root.innerHTML = body;
  //     mount.current = true;
  //   });
  //   const onChangeTitle = (e) => {
  //     onChangeField({ key: "title", value: e.target.value });
  //   };
  return (
    <EditorBlock>
      <StyleInput
        placeholder="내용을 입력 하세요"
        // onChange={onChangeTitle}
        // value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
