import React from "react";
import HeaderContainer from "../../containers/common/HeaderContainer";
import WriteButtonContainer from "../../containers/memoboard/posts/WriteButtonContainer";
import PostListContainer from "../../containers/memoboard/posts/PostListContainer";
import PageNationContainer from "../../containers/memoboard/posts/PageNationContainer";
const MainForm = () => {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <WriteButtonContainer />
      <PostListContainer />
      <PageNationContainer />
    </div>
  );
};

export default MainForm;
