import { createAction } from "@reduxjs/toolkit";

export const productsActions = {
  fetch: createAction("FETCH_PRODUCTS"),
  start: createAction("FETCH_START_PRODUCTS"),
  success: createAction("FETCH_SUCCESS_PRODUCTS"),
  error: createAction("FETCH_ERROR_PRODUCTS"),
  setPage: createAction("SET_PAGE_PRODUCTS"),
};
