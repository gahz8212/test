import { createAction, handleActions } from "redux-actions";
import * as authAPI from "../lib/api/auth";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");
const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] =
  createRequestActionTypes("auth/JOIN");
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
const initialState = {
  login: { email: "", password: "" },
  join: { email: "", password: "", nick: "" },
  auth: null,
  authError: null,
};
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));
export const join = createAction(JOIN, ({ email, password, nick }) => ({
  email,
  password,
  nick,
}));
const loginSaga = createRequestSaga(login, authAPI.login);
const joinSaga = createRequestSaga(join, authAPI.join);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(JOIN, joinSaga);
}
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: { ...state[form], [key]: value },
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      auth: null,
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      authError,
      auth: null,
    }),
    [JOIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [JOIN_FAILURE]: (state, { payload: authError }) => ({
      ...state,
      authError,
      auth: null,
    }),
  },
  initialState
);
export default auth;
