import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postAPI from "../lib/api/post";
const [WRITE_POST,WRITE_POST_SUCCESS,WRITE_POST_FAILURE]