import React, { useState, useEffect } from "react";
import PostViewer from "../../../components/memoboard/post/PostViewer";
import PostActionButtons from "./PostActionButtons";
import { useNavigate, useParams } from "react-router-dom";
import { readPost } from "../../../modules/post";
import { useDispatch, useSelector } from "react-redux";

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
    navigate("/write");
  };
  const onRemove = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(readPost(postId));
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
        />
      }
    ></PostViewer>
  );
};

export default PostViewerContainer;
