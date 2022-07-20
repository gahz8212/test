import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postAPI from "../lib/api/post";
import { takeLatest } from "redux-saga/effects";
const INITIALIZE_POSTS = "posts/INITIALIZE_POSTS";
const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
  createRequestActionTypes("posts/LIST_POSTS");
export const listPost = createAction(LIST_POSTS);
export const initializePosts = createAction(INITIALIZE_POSTS);
const listPostSaga = createRequestSaga(LIST_POSTS, postAPI.list);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostSaga);
}
const initialState = { posts: null, postsError: null, lastPage: 1 };
const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      postsError: null,
      lastPage: parseInt(response.headers["last-page"], 10),
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: postsError }) => ({
      ...state,
      posts: null,
      postsError,
    }),
    [INITIALIZE_POSTS]: () => initialState,
  },
  initialState
);
export default posts;
