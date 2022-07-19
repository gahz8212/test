import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postAPI from "../lib/api/post";
import { takeLatest } from "redux-saga/effects";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes("post/READ_POST");
const UNLOAD_POST = "post/UNLOAD_POST";
export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);
const readPostSaga = createRequestSaga(READ_POST, postAPI.read);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}
const initialState = { post: null, postError: null };
const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
      postError: null,
    }),
    [READ_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      post: null,
      postError,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState
);
export default post;
