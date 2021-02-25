import { createAction } from "@reduxjs/toolkit";

export const myProductsActions = {
  fetch: createAction("FETCH_MY_PRODUCTS"),
  start: createAction("FETCH_START_MY_PRODUCTS"),
  success: createAction("FETCH_SUCCESS_MY_PRODUCTS"),
  error: createAction("FETCH_ERROR_MY_PRODUCTS"),
  addRequest: createAction("ADD__MY_PRODUCTS_REQUEST"),
  addMyProduct: createAction("ADD_MY_PRODUCTS"),
  updateRequest: createAction("UPDATE_MY_PRODUCT_REQUEST"),
  updateMyProduct: createAction("UPDATE_MY_PRODUCT"),
  deleteRequest: createAction("DELETE_MY_PRODUCT_REQUEST"),
  deleteMyProduct: createAction("DELETE_MY_PRODUCT_SUCCESS"),
  setPage: createAction("SET_PAGE_MY_PRODUCTS"),
};
