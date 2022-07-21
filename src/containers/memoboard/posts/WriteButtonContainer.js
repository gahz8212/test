import React from "react";
import WriteButtons from "../../../components/memoboard/posts/WriteButton";
import { useSelector } from "react-redux";
const WriteButtonContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <div>{user && <WriteButtons></WriteButtons>}</div>;
};

export default WriteButtonContainer;
