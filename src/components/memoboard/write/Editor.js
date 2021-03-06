import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
const EditorBlock = styled(Responsive)`
  margin: 8rem auto 2rem;
`;
const StyleInput = styled.input`
  display: block;
  margin: 0 auto;
  border: none;
  outline: none;
  font-size: 3rem;
  width: 70%;
  border-bottom: 3px solid green;
  &:hover {
    background: lightgreen;
    &::placeholder {
      color: green;
    }
  }
`;
const QuillWrapper = styled.div`
  .ql-editor {
    width: 70%;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.5;
    height: 200px;
    overflow: auto;
  }
  .ql-editor.ql-blank::before {
    left: 0;
  }
`;
const Editor = ({ onChangeField, body, title }) => {
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
          [{ list: "order" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "content", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);
  const mount = useRef(false);
  useEffect(() => {
    if (mount.current) {
      return;
    }
    quillInstance.current.root.innerHTML = body;
    mount.current = true;
  }, [body]);
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };
  return (
    <EditorBlock>
      <StyleInput
        type="text"
        placeholder="제목을 입력 하세요"
        onChange={onChangeTitle}
        value={title}
        autoFocus
      />

      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
