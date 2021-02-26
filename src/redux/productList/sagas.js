import { takeEvery, put, call } from "redux-saga/effects";
import { productsActions } from "redux/productList/actions";
import getProducts from "helper/apiRequest/getProducts";

export function* ProductsSagas() {
  yield takeEvery("FETCH_PRODUCTS", onGetProducts);
}

function* onGetProducts(action) {
  const { urlParams } = action.payload;
  yield put(productsActions.start());
  try {
    const products = yield call(getProducts, urlParams);
    yield put(productsActions.success(products));
  } catch (error) {
    yield put(productsActions.error(error.message));
  }
}
