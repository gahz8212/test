import React, { useState, useEffect } from "react";
import PostViewer from "../../../components/memoboard/post/PostViewer";
import PostActionButtons from "./PostActionButtons";
import { useNavigate, useParams } from "react-router-dom";

import { readPost, unloadPost } from "../../../modules/post";
import { setOriginalPost } from "../../../modules/write";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../../lib/api/post";

const PostViewerContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post, postError, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    loading: loading["post/READ_POST"],
    postError: post.postError,
  }));
  const onGoHome = () => {
    navigate("/");
  };
  const onEdit = () => {
    dispatch(setOriginalPost(post));

    navigate("/write");
  };
  const onRemove = () => {
    setVisible(true);
  };
  const onConfirm = () => {
    removePost(postId);

    setVisible(false);
    navigate("/");
  };
  const onCancel = () => {
    setVisible(false);
  };
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return (
    <PostViewer
      post={post}
      loading={loading}
      postError={postError}
      PostActionButtons={
        <PostActionButtons
          onGoHome={onGoHome}
          onEdit={onEdit}
          onRemove={onRemove}
          onConfirm={onConfirm}
          visible={visible}
          onCancel={onCancel}
        />
      }
    ></PostViewer>
  );
};

export default PostViewerContainer;
