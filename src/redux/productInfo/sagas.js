// import { call, put, takeEvery } from "@redux-saga/core/effects";
// import { productActions } from "redux/productInfo/actions";
// import { getProduct } from "helper/apiRequest/getProduct";
//
// function* onGetProductById(action) {
//   console.log("action", action);
//   yield put(productActions.start);
//   try {
//     const product = yield call(getProduct, action.payload);
//     console.log("saga", product);
//     yield put(productActions.success(product));
//   } catch (error) {
//     yield put(productActions.error(error.message));
//   }
// }
//
// export function* ProductSagas() {
//   yield takeEvery("FETCH_PRODUCT", onGetProductById);
// }
