import React, { useState } from "react";
import PostViewer from "../../../components/memoboard/post/PostViewer";
import PostActionButtons from "./PostActionButtons";
import { useNavigate } from "react-router-dom";
const PostViewerContainer = () => {
  const navigate = useNavigate();
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
  return (
    <PostViewer
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
