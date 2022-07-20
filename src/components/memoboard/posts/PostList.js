import React from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import SubInfo from "../../common/SubInfo";
import Tags from "../../common/Tags";
import { Link } from "react-router-dom";

const PostListBlock = styled(Responsive)``;
const PostItemBlock = styled.div`
  margin: 0 auto;
  width: 70%;
  &:first-child {
    margin-top: 1rem;
  }
  & + & {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid black;
  }
  .title-area {
    font-weight: bolder;
    font-size: 1.125rem;
  }
`;

const ContentBlock = styled.div`
  /* background: yellow; */
  margin-top: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  height: 200px;
`;
const PostList = ({ posts, postsError, loading }) => {
  if (postsError) return null;
  if (posts && loading) {
    return (
      <PostListBlock>
        {posts.map((post) => {
          return (
            <PostItemBlock key={post.id}>
              <b className="title-area">
                <Link to={`@${post.User.nick}}/${post.id}`}>{post.title}</Link>
              </b>
              <SubInfo post={post} />
              <Tags post={post} />
              <ContentBlock
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></ContentBlock>
            </PostItemBlock>
          );
        })}
      </PostListBlock>
    );
  }
};

export default PostList;
PostList.defaultProps = {
  posts: [
    // {
    //   id: 1,
    //   name: "관리자",
    //   title: "하기 휴가일정",
    //   content:
    //     "하기 휴가 일정이 8월3일~8월7일로 잡혔습니다.</br> 단, 출고일정에 따라 조금 변동이 있을 수 있읍니다.",
    // },
    // {
    //   id: 2,
    //   name: "관리자",
    //   title: "전사공지",
    //   content: "에어컨 켤때는 반드시 실외기 환기구가 열려있는지 확인 바랍니다.",
    // },
  ],
};
