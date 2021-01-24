import { createReducer } from "@reduxjs/toolkit";

import { productsActions } from "redux/productList/actions";

// export const start = createAction("FETCH_START_PRODUCTS");
// export const success = createAction("FETCH_SUCCESS_PRODUCTS");
// export const error = createAction("FETCH_ERROR_PRODUCTS");

const initialState = {
  data: [],
  error: null,
  loading: false,
  success: false,
};

const reducers = createReducer(initialState, {
  [productsActions.start]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [productsActions.success]: (state, action) => ({
    ...state,
    loading: false,
    succeed: true,
    data: action.payload,
  }),
  [productsActions.error]: (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.payload,
  }),
});

export default reducers;
