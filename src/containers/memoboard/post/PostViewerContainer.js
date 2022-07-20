import React, { useState, useEffect } from "react";
import PostViewer from "../../../components/memoboard/post/PostViewer";
import PostActionButtons from "./PostActionButtons";
import { useNavigate, useParams } from "react-router-dom";
<<<<<<< HEAD
import { readPost, unloadPost } from "../../../modules/post";
import { useDispatch, useSelector } from "react-redux";
import { setOriginalPost, initializeWrite } from "../../../modules/write";
import { removePost } from "../../../lib/api/post";
=======
import { readPost } from "../../../modules/post";
import { setOriginalPost } from "../../../modules/write";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../lib/api/post";
>>>>>>> 419d780b00efd31f4dac61efe38bb1f66e00e6e0
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
<<<<<<< HEAD
    // console.log("post", post);
    dispatch(initializeWrite());
    dispatch(setOriginalPost(post));
=======
    setOriginalPost(post);
>>>>>>> 419d780b00efd31f4dac61efe38bb1f66e00e6e0
    navigate("/write");
  };
  const onRemove = () => {
    setVisible(true);
  };
  const onConfirm = () => {
<<<<<<< HEAD
    removePost(postId);
=======
    remove(postId);
>>>>>>> 419d780b00efd31f4dac61efe38bb1f66e00e6e0
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
          onConfirm={onConfirm}
        />
      }
    ></PostViewer>
  );
};

export default PostViewerContainer;
