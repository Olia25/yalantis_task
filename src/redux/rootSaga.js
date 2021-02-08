import { all } from "redux-saga/effects";
import { OriginsSagas } from "redux/origins/sagas";

export default function* RootSaga() {
  yield all([OriginsSagas()]);
}
