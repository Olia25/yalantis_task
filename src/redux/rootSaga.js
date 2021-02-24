import { all } from "redux-saga/effects";
import { OriginsSagas } from "redux/origins/sagas";
// import { ProductsSagas } from "redux/productList/sagas";

export default function* RootSaga() {
  yield all([OriginsSagas()]);
}
