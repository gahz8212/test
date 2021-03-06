import { startLoading, finishLoading } from "../modules/loading";
import { call, put } from "redux-saga/effects";
export function createRequestActionTypes(type) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
}
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      console.log("response", response);
      yield put({ type: SUCCESS, payload: response.data, meta: response });
    } catch (e) {
      yield put({ type: FAILURE, payload: e, error: true });
    }
    yield finishLoading(type);
  };
}
