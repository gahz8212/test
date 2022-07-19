import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postAPI from "../lib/api/post";
import { takeLatest } from "redux-saga/effects";
const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
  createRequestActionTypes("posts/LIST_POSTS");
export const listPost = createAction(LIST_POSTS);
const listPostSaga = createRequestSaga(LIST_POSTS, postAPI.list);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostSaga);
}
const initialState = { posts: null, postsError: null };
const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
      postsError: null,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: postsError }) => ({
      ...state,
      posts: null,
      postsError,
    }),
  },
  initialState
);
export default posts;
