import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth, { authSaga } from "./auth";
const rootReducer = combineReducers({ loading, auth });
export default rootReducer;
export function* rootSaga() {
  yield all([authSaga()]);
}
