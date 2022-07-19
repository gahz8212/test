import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Tags = ({ post }) => {
  console.log(post);
  const TagsBlock = styled.div`
    margin-top: 0.2rem;
    a {
      color: darkcyan;
      &:hover {
        font-weight: bold;
      }
    }
    a + a {
      margin-left: 1rem;
    }
  `;
  console.log(post);
  return (
    <TagsBlock>
      {post.Hashtags.map((tag) => (
        <Link to={`/?tag=${tag.title}`} key={tag.title}>
          #{tag.title}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;
