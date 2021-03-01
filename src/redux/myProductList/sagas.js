import {
  call,
  put,
  takeEvery,
  takeLatest,
  delay,
  select,
} from "@redux-saga/core/effects";
import { myProductsActions } from "redux/myProductList/actions";
import { deleteProduct } from "helper/apiRequest/deleteProduct";
import { patchProduct } from "helper/apiRequest/patchProduct";
import { postProduct } from "helper/apiRequest/postProduct";
import getMyProducts from "helper/apiRequest/getMyProducts";
import { filterOrigMyProd } from "redux/originsFiltering/filterMyProd/selectors";
import { PER_PAGE } from "constants/constants";
import { getPage } from "redux/myProductList/selectors";
import history from "helper/history";
import {
  getMaxPrice,
  getMinPrice,
} from "redux/priceFilter/filterMyProd/selectors";

export function* MyProductSagas() {
  yield takeLatest("FETCH_MY_PRODUCTS", onGetMyProduct);
  yield takeEvery("ADD__MY_PRODUCTS_REQUEST", onSetMyProduct);
  yield takeEvery("UPDATE_MY_PRODUCT_REQUEST", onSetUpdateMyProduct);
  yield takeEvery("DELETE_MY_PRODUCT_REQUEST", onDeleteMyProduct);
}

function* onGetMyProduct() {
  yield put(myProductsActions.start());
  try {
    const origins = yield select(filterOrigMyProd);
    const page = yield select(getPage);
    const minPrice = yield select(getMinPrice);
    const maxPrice = yield select(getMaxPrice);
    const perPage = PER_PAGE;

    yield history.push(
      `/?page=${page}&min=${minPrice}&max=${maxPrice}&origins=${origins}`
    );
    yield delay(500);

    const response = yield call(getMyProducts, {
      origins,
      minPrice,
      maxPrice,
      page,
      perPage,
    });

    yield put(myProductsActions.success(response));
  } catch (e) {
    yield put(myProductsActions.error(e.message));
  }
}

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
