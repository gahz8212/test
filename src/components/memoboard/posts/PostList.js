import React from "react";
import styled, { css } from "styled-components";
import Responsive from "../../common/Responsive";
import SubInfo from "../../common/SubInfo";
import Tags from "../../common/Tags";
import { Link } from "react-router-dom";

const PostListBlock = styled(Responsive)`
  ${(props) =>
    !props.user &&
    css`
      margin-top: 5rem;
    `}
`;
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
  height: 100px;
`;

const PostList = ({ posts, loading, postsError, user }) => {
  if (postsError) return null;
  if (posts && loading) {
    return (
      <PostListBlock user={user}>
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
