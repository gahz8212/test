import React from "react";
import HeaderContainer from "../../containers/common/HeaderContainer";
import EditorContainer from "../../containers/memoboard/write/EditorContainer";
import TagboxContainer from "../../containers/memoboard/write/TagboxContainer";
import PostButtonsContainer from "../../containers/memoboard/write/PostButtonsContainer";
const WriteForm = () => {
  return (
    <div>
      <HeaderContainer />
      <EditorContainer />
      <TagboxContainer />
      <PostButtonsContainer />
    </div>
  );
};

export default WriteForm;
