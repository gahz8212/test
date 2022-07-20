import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postAPI from "../lib/api/post";
import { takeLatest } from "redux-saga/effects";
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createRequestActionTypes("write/WRITE_POST");
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] =
  createRequestActionTypes("write/UPDATE_POST");
const INITIALIZE_WRITE = "write/INITIALIZE_WRITE";
const CHANGE_WRITE = "write/CHANGE_WRITE";
const SET_ORIGINAL_POST = "write/SET_OROGINAL_POST";
export const initializeWrite = createAction(INITIALIZE_WRITE);
export const changeWrite = createAction(CHANGE_WRITE, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(
  WRITE_POST,
  ({ title, content, tags }) => ({ title, content, tags })
);
export const updatePost = createAction(
  UPDATE_POST,
  ({ title, content, tags, postId }) => ({ title, content, tags, postId })
);
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);
const writePostSaga = createRequestSaga(WRITE_POST, postAPI.write);
const updatePostSaga = createRequestSaga(UPDATE_POST, postAPI.update);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}
const initialState = {
  title: "",
  content: "",
  tags: [],
  post: null,
  postError: null,
  originalPostId: "",
};
const write = handleActions(
  {
    [INITIALIZE_WRITE]: () => initialState,
    [CHANGE_WRITE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
      postError: null,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
      post: null,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
      postError: null,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
      post: null,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      content: post.content,
      tags: post.Hashtags,
      originalPostId: post.id,
    }),
  },
  initialState
);
export default write;
