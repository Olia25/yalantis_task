import { createAction } from "@reduxjs/toolkit";

export const productsActions = {
  start: createAction("FETCH_START_PRODUCTS"),
  success: createAction("FETCH_SUCCESS_PRODUCTS"),
  error: createAction("FETCH_ERROR_PRODUCTS"),
};
