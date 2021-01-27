import { createAction } from "@reduxjs/toolkit";

export const productActions = {
  start: createAction("FETCH_START_PRODUCT"),
  success: createAction("FETCH_SUCCESS_PRODUCT"),
  error: createAction("FETCH_ERROR_PRODUCT"),
};
