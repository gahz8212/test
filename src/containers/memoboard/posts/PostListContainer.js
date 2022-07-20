import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPost, initializePosts } from "../../../modules/posts";
import { initializeWrite } from "../../../modules/write";
import PostList from "../../../components/memoboard/posts/PostList";
import { useSearchParams, useParams } from "react-router-dom";
const PostListContainer = () => {
  const { nick } = useParams();
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const dispatch = useDispatch();
  const { posts, loading, postsError } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    loading: loading["posts/LIST_POSTS"],
    postsError: posts.postsError,
  }));
  useEffect(() => {
    dispatch(listPost({ page, tag, nick }));
    return () => {
      dispatch(initializeWrite());
      dispatch(initializePosts());
    };
  }, [dispatch, page, tag, nick]);
  return (
    <PostList
      posts={posts}
      loading={loading}
      postsError={postsError}
    ></PostList>
  );
};

export default PostListContainer;
