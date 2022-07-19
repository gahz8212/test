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
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid black;
  }
  .title-area {
    font-weight: bolder;
    font-size: 1.125rem;
  }
`;

const ContentBlock = styled.div`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;
const PostList = ({ posts, loading, postsError }) => {
  if (postsError) return null;
  if (posts && loading) {
    return (
      <PostListBlock>
        {posts.map((post) => {
          return (
            <PostItemBlock key={post.id}>
              <b className="title-area">
                <Link to={`@kim/${post.id}`}>{post.title}</Link>
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
