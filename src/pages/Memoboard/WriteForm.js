import React from "react";
import Header from "../../components/common/Header";
import EditorContainer from "../../containers/memoboard/write/EditorContainer";
import TagboxContainer from "../../containers/memoboard/write/TagboxContainer";
import PostButtonsContainer from "../../containers/memoboard/write/PostButtonsContainer";
const WriteForm = () => {
  return (
    <div>
      <Header />
      <EditorContainer />
      <TagboxContainer />
      <PostButtonsContainer />
    </div>
  );
};

export default WriteForm;
