import { put, call, select, delay, takeLatest } from "redux-saga/effects";
import { productsActions } from "redux/productList/actions";
import getProducts from "helper/apiRequest/getProducts";
import { filterOrigAllProd } from "redux/originsFiltering/filterAllProd/selectors";
import { getPage } from "redux/productList/selectors";
import { PER_PAGE } from "constants/constants";
import {
  getMinPrice,
  getMaxPrice,
} from "redux/priceFilter/filterAllProd/selectors";
import history from "helper/history";

export function* ProductsSagas() {
  yield takeLatest("FETCH_PRODUCTS", onGetProducts);
}

function* onGetProducts() {
  yield put(productsActions.start());
  try {
    const minPrice = yield select(getMinPrice);
    const maxPrice = yield select(getMaxPrice);
    const origins = yield select(filterOrigAllProd);
    const page = yield select(getPage);
    const perPage = PER_PAGE;

    yield history.push(
      `/?page=${page}&min=${minPrice}&max=${maxPrice}&origins=${origins}`
    );

    yield delay(500);

    const products = yield call(getProducts, {
      page,
      perPage,
      origins,
      minPrice,
      maxPrice,
    });

    yield put(productsActions.success(products));
  } catch (error) {
    yield put(productsActions.error(error.message));
  }
}
