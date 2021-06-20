import { takeEvery, put, call } from "redux-saga/effects";
import { originsActions } from "redux/origins/actions";
import getOrigin from "helper/apiRequest/getOrigin";

export function* OriginsSagas() {
  yield takeEvery("FETCH_ORIGINS", onGetOrigins);
}

function* onGetOrigins() {
  yield put(originsActions.start());
  try {
    const origins = yield call(getOrigin);
    yield put(originsActions.success(origins));
  } catch (error) {
    yield put(originsActions.error(error.message));
  }
}
