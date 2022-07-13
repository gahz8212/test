import React from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import SubInfo from "../../common/SubInfo";
const PostViewerBlock = styled(Responsive)`
  .contents {
    margin: 0 auto;
    width: 70%;
  }
`;
const TitleBlock = styled.div`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;
const ContentBlock = styled.div`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;
const PostViewer = ({ PostActionButtons, post }) => {
  return (
    <PostViewerBlock>
      <div className="contents">
        {PostActionButtons}
        <TitleBlock>
          <b>{post.title}</b>
        </TitleBlock>
        <SubInfo post={post}></SubInfo>
        <ContentBlock
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></ContentBlock>
      </div>
    </PostViewerBlock>
  );
};

export default PostViewer;
PostViewer.defaultProps = {
  post: {
    id: 1,
    name: "관리자",
    title: "하기 휴가일정",
    content:
      "하기 휴가 일정이 8월3일~8월7일로 잡혔습니다.</br> 단, 출고일정에 따라 조금 변동이 있을 수 있읍니다.",
  },
};
