import { createAction } from "@reduxjs/toolkit";

export const myProductsActions = {
  start: createAction("FETCH_START_MY_PRODUCTS"),
  success: createAction("FETCH_SUCCESS_MY_PRODUCTS"),
  error: createAction("FETCH_ERROR_MY_PRODUCTS"),
  addMyProduct: createAction("ADD_MY_PRODUCTS"),
  updateMyProduct: createAction("UPDATE_MY_PRODUCT"),
};
