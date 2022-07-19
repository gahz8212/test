import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWrite } from "../../../modules/write";
import Editor from "../../../components/memoboard/write/Editor";
const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, content } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
  }));
  const onChange = useCallback(
    (payload) => {
      dispatch(changeWrite(payload));
    },
    [dispatch]
  );

  return (
    <Editor onChangeField={onChange} body={content} title={title}></Editor>
  );
};

export default EditorContainer;
