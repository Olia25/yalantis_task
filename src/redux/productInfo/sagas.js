import { call, put, takeEvery } from "@redux-saga/core/effects";
import { productActions } from "redux/productInfo/actions";
import getProduct from "helper/apiRequest/getProduct";

export function* ProductSagas() {
  yield takeEvery("FETCH_PRODUCT", onGetProductById);
}

function* onGetProductById(action) {
  yield put(productActions.start());
  try {
    const product = yield call(getProduct, action.payload);
    yield put(productActions.success(product));
  } catch (error) {
    yield put(productActions.error(error.message));
  }
}
