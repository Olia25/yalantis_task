import { all } from "redux-saga/effects";
import { OriginsSagas } from "redux/origins/sagas";
import { ProductSagas } from "redux/productInfo/sagas";
import { ProductsSagas } from "redux/productList/sagas";
import { MyProductSagas } from "redux/myProductList/sagas";

export default function* RootSaga() {
  yield all([
    ProductsSagas(),
    ProductSagas(),
    OriginsSagas(),
    MyProductSagas(),
  ]);
}
