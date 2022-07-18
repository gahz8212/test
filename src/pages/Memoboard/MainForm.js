import React from "react";
import HeaderContainer from "../../containers/common/HeaderContainer";
import WriteButtonContainer from "../../containers/memoboard/posts/WriteButtonContainer";
import PostListContainer from "../../containers/memoboard/posts/PostListContainer";
const MainForm = () => {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <WriteButtonContainer />
      <PostListContainer />
    </div>
  );
};

export default MainForm;
