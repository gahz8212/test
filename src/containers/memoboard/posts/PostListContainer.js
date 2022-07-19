import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPost } from "../../../modules/posts";
import PostList from "../../../components/memoboard/posts/PostList";
const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, loading, postsError } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    loading: loading["posts/LIST_POSTS"],
    postsError: posts.postsError,
  }));
  useEffect(() => {
    dispatch(listPost());
  }, [dispatch]);
  return (
    <PostList
      posts={posts}
      loading={loading}
      postsError={postsError}
    ></PostList>
  );
};

export default PostListContainer;
