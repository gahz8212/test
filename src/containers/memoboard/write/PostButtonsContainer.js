import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writePost, updatePost } from "../../../modules/write";
import PostButtons from "../../../components/memoboard/write/PostButtons";
import { useNavigate } from "react-router-dom";
const PostButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, content, tags, originalPostId, post } = useSelector(
    ({ write }) => ({
      originalPostId: write.originalPostId,
      title: write.title,
      content: write.content,
      tags: write.tags,
      post: write.post,
    })
  );
  const write = () => {
    dispatch(writePost({ title, content, tags }));
  };
  const update = () => {
    dispatch(updatePost({ title, content, tags, postId: originalPostId }));
  };
  useEffect(() => {
    if (post) {
      const { nick, id } = post;
      navigate(`/@${nick}/${id}`);
    }
  }, [navigate, post]);

  return (
    <PostButtons
      originalPostId={originalPostId}
      onPublish={write}
      onUpdate={update}
    ></PostButtons>
  );
};

export default PostButtonsContainer;
