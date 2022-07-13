import React from "react";
import Header from "../../components/common/Header";
import WriteButtonContainer from "../../containers/memoboard/posts/WriteButtonContainer";
import PostListContainer from "../../containers/memoboard/posts/PostListContainer";
const MainForm = () => {
  return (
    <div>
      <Header></Header>
      <WriteButtonContainer />
      <PostListContainer />
    </div>
  );
};

export default MainForm;
