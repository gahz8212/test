import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import posts, { postsSaga } from "./posts";
const rootReducer = combineReducers({
  loading,
  auth,
  user,
  write,
  post,
  posts,
});
export default rootReducer;
export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}
