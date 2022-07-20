import React, { useState, useEffect } from "react";
import PostViewer from "../../../components/memoboard/post/PostViewer";
import PostActionButtons from "./PostActionButtons";
import { useNavigate, useParams } from "react-router-dom";
import { readPost, unloadPost } from "../../../modules/post";
import { useDispatch, useSelector } from "react-redux";
import { setOriginalPost, initializeWrite } from "../../../modules/write";
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
    // console.log("post", post);
    dispatch(initializeWrite());
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
          visible={visible}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      }
    ></PostViewer>
  );
};

export default PostViewerContainer;
