import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import { call, takeLatest } from "redux-saga/effects";
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");
const TEMP_SET_USER = "user/TEMP_SET_USER";
const LOGOUT = "user/LOGOUT";
export const check = createAction(CHECK);
export const tempSetUser = createAction(TEMP_SET_USER);
export const logout = createAction(LOGOUT);
const checkSaga = createRequestSaga(CHECK, authAPI.check);

function logoutSaga() {
  return function* () {
    yield call(authAPI.logout);
  };
}
function checkSagaFailure() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.log("local storage is not working");
  }
}
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(CHECK_FAILURE, checkSagaFailure);
}
const initialState = { user: null, userError: null };
const user = handleActions(
  {
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      userError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: userError }) => ({
      ...state,
      userError,
      user: null,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);
export default user;
