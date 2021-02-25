import { call, put, takeEvery } from "@redux-saga/core/effects";
import { myProductsActions } from "redux/myProductList/actions";
import { deleteProduct } from "helper/apiRequest/deleteProduct";
import { patchProduct } from "helper/apiRequest/patchProduct";
import { postProduct } from "helper/apiRequest/postProduct";

export function* MyProductSagas() {
  // yield takeEvery("FETCH_MY_PRODUCTS", onGetMyProduct);
  yield takeEvery("ADD__MY_PRODUCTS_REQUEST", onSetMyProduct);
  yield takeEvery("UPDATE_MY_PRODUCT_REQUEST", onSetUpdateMyProduct);
  yield takeEvery("DELETE_MY_PRODUCT_REQUEST", onDeleteMyProduct);
}

// function* onGetMyProduct(action) {
// }

function* onSetMyProduct(action) {
  yield put(myProductsActions.start());
  try {
    const response = yield call(postProduct, action.payload);
    yield put(myProductsActions.addMyProduct(response.data));
  } catch (e) {
    yield put(myProductsActions.error(e.message));
  }
}

function* onSetUpdateMyProduct(action) {
  const { value, productId } = action.payload;
  yield put(myProductsActions.start());
  try {
    yield call(patchProduct, value, productId);
    yield put(myProductsActions.updateMyProduct({ value, productId }));
  } catch (e) {
    yield put(myProductsActions.error(e.message));
  }
}

function* onDeleteMyProduct(action) {
  yield put(myProductsActions.start());
  try {
    yield call(deleteProduct, action.payload);
    yield put(myProductsActions.deleteMyProduct(action.payload));
  } catch (e) {
    yield put(myProductsActions.error(e.message));
  }
}
